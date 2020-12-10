<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p><strong>Código:</strong> {{ id }} / {{ $route.params.id }}</p>
    <p><strong>Língua:</strong> {{ $route.query.language }}</p>
    <hr />
    <button primario @click="confirmou = true">clique para sair</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmou: false,
    };
  },

  //No componente: antes de entrar
  beforeRouteEnter(to, from, next) {
    const authenticated = true;
    authenticated ? next() : next(false);
  },

  //No componente: Quando for sair(pode acesar o this.confirmou pois o componente já carregou)
  beforeRouteLeave(to, from, next) {
    this.confirmou ? next() : next(false);
  },
};
</script>

<style></style>
