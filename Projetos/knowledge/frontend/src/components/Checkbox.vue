<template>
  <b-form-checkbox
    id="user-admin"
    v-show="mode === 'save'"
    v-model="user.admin"
    class="mt-3 mb-3"
  >
    Administrador
  </b-form-checkbox>
</template>

<script>
export default {
  name: checkbox,
  props: {
    id: String,
    label: String,
  },
};
</script>

<style>
</style>