<template>
  <div class="list-group">
    <router-link
      v-for="n in 40"
      :key="n"
      tag="a"
      :to="`/user/${n}`"
      class="list-group-item list-group-item-action"
      >Usuário {{n}}</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style></style>
