### Project setup
npm install

### Vue Global
sudo npm i -g @vue/cli

### Vue na Pasta
vue create nome-do-projeto
-default

### Iniciar Servidor
npm run serve
-ele vai passar a porta

#### Reconstrói a pasta Modules
npm i

### compilar para produção
npm run build




<template>
  <div id="app">
      {{ titulo }}
      <button @click="titulo += '='">Botão</button>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            titulo: 'Teste Data usando Vue JS!!'
        }
    }
}
</script>

<style>
    #app {
        background-color: chocolate;
        color: #fff;
    }
</style>
