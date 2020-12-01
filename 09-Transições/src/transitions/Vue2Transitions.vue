
// npm install --save vue2-transitions

// Global
// import App from './App.vue'
// import Transitions from 'vue2-transitions'
// Vue.config.productionTip = false
// Vue.use(Transitions)

// Demo:https://binarcode.github.io/vue2-transitions/

<template>
  <zoom-center-transition :duration="400" :delay="300">
    <slot />
  </zoom-center-transition>
</template>
<script>
import { ZoomCenterTransition } from "vue2-transitions";

export default {
  components: {
    ZoomCenterTransition,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>


<style>
</style>
