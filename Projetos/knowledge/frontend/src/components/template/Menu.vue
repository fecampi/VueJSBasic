<template>
    <fade-Transition :duration="300">
  <aside class="menu" v-show="isMenuVisible"></aside>
      </fade-Transition>
</template>

<script>
import { mapState } from "vuex";
import { FadeTransition } from "vue2-transitions";
export default {
  name: "Menu",
    components: { FadeTransition },
  computed: mapState("menuStatus", ["isMenuVisible"]),
  icon() {
    return this.isMenuVisible ? "fa-angle-left" : "fa-angle-down";
  },
};
</script>
<style>
.menu {
  grid-area: menu;
  background: linear-gradient(to right, #232526, #414345);

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
}
</style>
