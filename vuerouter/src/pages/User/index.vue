<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <p><strong>Código: </strong>{{ id }}</p>
    <Go to="/"> Voltar </Go>
  </div>
</template>

<script>
import Go from "../../shared/components/Go";
export default {
  components: { Go },
  props: ["id"],
};
</script>

<style>
</style>
