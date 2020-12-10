<template>
  <div id="app">
    <Menu />
       <fade-transition :duration="300">
    <router-view />
        </fade-transition>
    <router-view name="footer" id="rodape"></router-view>
  </div>
</template>

<script>
import { FadeTransition } from "vue2-transitions";
import Menu from "./shared/components/template/Menu";

export default {
  name: "App",
  components: {
    Menu,
    FadeTransition
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
