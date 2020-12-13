<template>
  <div id="app">
    <h1>Exercícios Vuex</h1>

    <div class="linha">
      <div>
        <Parametros />
        <Loja />
      </div>
      <Carrinho />
    </div>
  </div>
</template>

<script>
import Parametros from "./components/Parametros";
import Loja from "./components/Loja";
import Carrinho from "./components/Carrinho";

export default {
  name: "app",
  components: { Parametros, Loja, Carrinho },
};
</script>

<style>
* {
  font-family: "Oswald", sans-serif;
}

body {
  font-size: 2rem;
  background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

h1 {
  font-weight: 200;
}

.linha {
  display: flex;
}

button {
  font-size: 1.8rem;
  padding: 5px 15px;
  border-radius: 5px;
  color: #222;
  background-color: #fafafa;
  outline: none;
  border: none;
}
</style>
