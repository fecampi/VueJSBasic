<template>
<div>
  <transition name="slide" appear>
    <slot/>
  </transition>
  </div>
</template>


<style scoped>

@keyframes slide-in {
	from { transform: translateX(-400px); }
	to { transform: translateX(0); }
}

@keyframes slide-out {
	from { transform: translateX(0); }
	to { transform: translateX(-400px); }
}

.slide-enter-active {
	animation: slide-in 3s ease;
	transition: opacity 3s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 3s ease;
	transition: opacity 3s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-move {
	transition: transform 1s;
}
</style>
