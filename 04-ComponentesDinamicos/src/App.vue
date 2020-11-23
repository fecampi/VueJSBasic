<template>
  <div id="app">
    <span>
      <!--Menu de escolha de componentes-->
      <button @click="componente = 'Cores'">Cores</button>
      <button @click="componente = 'Sair'">Sair</button>
    </span>
    <!--deixa o componente VIVO(mantem o estado,deixando como estava antes de mudar)-->
    <keep-alive>
      <!--Componente Dinamico-->
      <component :is="componente" />
    </keep-alive>
  </div>
</template>

<script>
import Cores from "./components/Cores";
import Sair from "./components/Sair";

export default {
  components: { Cores, Sair},
  data() {
    return {
      componente: "Cores",
    };
  },
};
</script>

