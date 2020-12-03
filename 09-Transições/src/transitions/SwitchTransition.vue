<template>
  <div>
    <transition name="fade" mode="out-in">
      <b-alert variant="info" show v-if="show" key="A">Opção A</b-alert>
      <b-alert variant="danger" show v-else key="B">Opção B</b-alert>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
  },
  data() {
    return {
      exibir: false,
    };
  },
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
</style>
