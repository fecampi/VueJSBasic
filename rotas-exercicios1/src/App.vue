<template>
  <div id="app">
    <FilhoA :propsA="propsA" />
    <h1>Rotas com VueRouter</h1>
    <Menu />
    <h1>Rotas com VueRouter</h1>
    <Menu />

  </div>
</template>

<script>
import FilhoA from "./shared/components/template/FilhoA";
import Menu from "./shared/components/template/Menu";
export default {
  componets: { Menu, FilhoA },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
