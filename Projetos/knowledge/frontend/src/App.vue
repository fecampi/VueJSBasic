<template>
  <div id="app" :class="changeGrid">
    <Header title="notion" MenuVisible />
    <fade-Transition :duration="300">
      <Menu v-if="isMenuVisible" />
    </fade-Transition>
    <Content />
    <Footer />
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
import { mapState } from "vuex";
import Header from "@/components/template/Header";
import Menu from "@/components/template/Menu";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
export default {
  name: "App",
  props: { MenuVisible: { type: Boolean } },
  components: { Header, Menu, Content, Footer, FadeTransition },
  computed: mapState("menuStatus", ["isMenuVisible"]),


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
  background-color: #efefef;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "header header"
    "menu content"
    "menu footer";
}

#app.MenuVisible {
  grid-template-areas:
    "header header"
    "content content"
    "footer footer";
}
</style>
