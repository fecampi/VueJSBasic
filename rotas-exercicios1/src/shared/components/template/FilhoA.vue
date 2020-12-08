<template>
  <div class="componente">
    <h4>Filho A</h4>
    <p>
      Recebendo Do Pai:
      <strong>{{ propsA }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    propsA: {
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
