<template>
  <div>
    <transition name="fade" appear>
      <div show v-show="show">
        <slot/>
        </div>
      
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
