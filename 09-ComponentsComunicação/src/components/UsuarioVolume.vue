<template>
  <div class="componente">
    <h4>Volume</h4>

      <strong>{{volume}}</strong>
      <div>
      <button @click="setVolume(volume-1)">Diminuir</button>
      <button @click="setVolume(volume+1)">Aumentar</button>
      </div>
      
   
  </div>
</template>

<script>
export default {
  props: {
    volume: Number,
    setVolume:Function
  },


};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #0e00d4;
  color: #fff;
}
</style>
