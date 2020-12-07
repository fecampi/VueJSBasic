<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="lg"
          v-model="user.name"
          placeholder="Informe o Nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input
          type="email"
          size="lg"
          v-model="user.email"
          placeholder="Informe o E-mail"
        ></b-form-input>
      </b-form-group>
      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
    </b-card>
    <br />
    <b-list-group>
      <b-list-group-item v-for="user in users" :key="user.id">
        <strong>Nome: </strong> {{ user.name }}<br />
        <strong>E-mail: </strong> {{ user.email }}<br />
        <strong>ID: </strong> {{ user.id }}<br />
        <b-button variant="warning" size="lg" @click="carregar(user.id)"
          >Carregar</b-button
        >
        <b-button
          variant="danger"
          size="lg"
          class="ml-2"
          @click="excluir(user.id)"
          >Excluir</b-button
        >
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      user: {
        name: "",
        email: "",
        id: null,
      },
    };
  },
  //Ao criar carrega a lista de users
  created() {
    this.$http.get("users.json").then((res) => {
      this.users = res.data;
    });
  },
  methods: {
    
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },

    excluir(id) {
      this.$http
        .delete(`/usuarios/${id}`)
        .then(() => this.limpar())
        .catch((err) => {
          this.limpar();
          this.mensagens.push({
            texto: "Problema para excluir!",
            tipo: "danger",
          });
        });
    },

    salvar() {
      this.$http.post("users.json", this.user).then(() => {
        this.user.name = " ";
        this.user.email = " ";
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>