<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de Conhecimento" />
    <div class="stats">
      <Stat
        title="Categorias"
        :value="stat.categories"
        icon="fa fa-folder"
        color="#d54d50"
      />
      <Stat
        title="Artigos"
        :value="stat.articles"
        icon="fa fa-file"
        color="#3bc480"
      />
      <Stat
        title="Usuários"
        :value="stat.users"
        icon="fa fa-user"
        color="#3282cd"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from "@/components/template/PageTitle";
import Stat from "./components/State";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  data: function () {
    return {
      stat: {},
    };
  },
  methods: {
    getStats() {
      this.axios.get("stats").then((res) => {
        this.stat = res.data;
      });
    },
  },
  //momento que ele é renderizado chama o o axios
  mounted() {
    this.getStats();
  },
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
