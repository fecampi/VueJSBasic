<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Usuario</strong> {{ $route.params.id }}</p>
    Língua:
    <select v-model="language">
      <option
        v-for="language in languages"
        :value="language.codigo"
        :key="language.codigo"
        :selected="language.codigo === 3"
      >
        {{ language.name }}
      </option>
    </select>

    <router-link
      tag="button"
      primario
      :to="{
        name: 'EditUser',
        params: { id },
        query: {
          authenticated: false,
          language,
        },
        hash: '#rodape',
      }"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      language: 1,

      languages: [
        { codigo: "pt", name: "Portugues" },
        { codigo: "ing", name: "Ingles" },
        { codigo: "fr", name: "Frances" },
      ],
    };
  },
};
</script>

<style></style>
