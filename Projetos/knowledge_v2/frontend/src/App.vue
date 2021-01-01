<template>
  <div id="app" :class="{ 'hide-menu': !isMenuVisible || !user }">
    <Header title="Fecampi" :hideToggle="!user" :hideUserDropdown="!user" />
    <Menu v-if="user" />
    <Loading v-if="validatingToken" />
    <Content v-else />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import { baseApiUrl, userKey } from "@/global";
import Header from "@/components/template/Header";
import Menu from "@/components/template/Menu";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
import Loading from "@/components/template/Loading";
export default {
  name: "App",
  props: { MenuVisible: { type: Boolean } },
  components: { Header, Menu, Content, Footer, Loading },
  data: function () {
    return {
      validatingToken: true,
    };
  },
  computed: {
    ...mapState("menuStatus", ["isMenuVisible", "user"]),
  },

  methods: {
    ...mapMutations("menuStatus", ["setUser", "toggleMenu"]),
    async validateToken() {
      this.validatingToken = true;

      //validar usuario
      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.setUser(null);

      //se não tem nada no local storage -> manda ele autenticar
      if (!userData) {
        this.validatingToken = false;
        this.$router.push({ name: "auth" });
        return;
      }

      //faz requisição com o userData
      const res = await axios.post(`${baseApiUrl}/validateToken`, userData);

      if (res.data) {
        this.setUser(userData);

        if (this.$mq === "xs" || this.$mq === "sm") {
          this.toggleMenu(false);
        }
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: "auth" });
      }

      this.validatingToken = false;
    },
  },
  created() {
    this.validateToken();
  },
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}

#app.hide-menu {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>