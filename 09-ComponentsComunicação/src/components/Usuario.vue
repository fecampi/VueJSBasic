<template>
  <div class="container">
    <h4>Pai</h4>
    <p>
      <strong>{{ nomeUsuario }}</strong>
    </p>
  

    <button @click="setNome('Felipe')">Felipe</button>
    <button @click="setNome('Ana')">Ana</button>
    <hr />

    <div class="componentes">
      <app-usuario-info :nome="nomeUsuario" :setNome="setNome" :volume="volume" />
      <app-usuario-volume :volume="volume" :setVolume="setVolume" />
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioVolume from "./UsuarioVolume.vue";

export default {
  components: { AppUsuarioInfo, AppUsuarioVolume },
  data() {
    return {
      nomeUsuario: "-----",
      volume: 2
   
    };
  },
  methods: {
    setNome(nome) {
      this.nomeUsuario = nome;
    },
    setVolume(volume) {
      this.volume = volume
    }

  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.componentes {
  display: flex;
}
</style>
