<template>
  <div class="componente">
    <h4>Filho D</h4>
    <p>
      Recebendo Do Irmão B:
      <strong>{{ propsD }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    propsD: {
      type: String,
    },
  },

  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
