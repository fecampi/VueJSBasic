<template>
<div>
  <transition name="fade" appear>
    <slot/>
  </transition>
  </div>
</template>




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
