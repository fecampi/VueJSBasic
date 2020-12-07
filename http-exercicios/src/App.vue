<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-alert
      show
      dismissible
      v-for="mensagem in mensagens"
      :key="mensagem.texto"
      :variant="mensagem.tipo"
      >{{ mensagem.texto }}</b-alert
    >
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
      <b-button @click="save(user.index)" size="lg" variant="primary"
        >Salvar</b-button
      >
    </b-card>
    <br />
    <b-list-group>
      <b-list-group-item v-for="(user, index) in users" :key="user.id">
        {{ (user.index = index) }}<br />
        <strong>Nome: </strong> {{ user.name }}<br />
        <strong>E-mail: </strong> {{ user.email }}<br />
        <strong>ID: </strong> {{ user.id }}<br />

        <b-button variant="warning" size="lg" @click="loadFields(user)"
          >Editar</b-button
        >
        <b-button
          variant="danger"
          size="lg"
          class="ml-2"
          @click="deleteUser(index, user.id)"
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
      mensagens: [],
      users: [],
      user: {
        name: "",
        email: "",
        id: null,
        index: null,
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
    clearFields() {
      this.user.name = "";
      this.user.email = "";
      this.user.id = null;
      this.mensagens = [];
    },

    loadFields(user) {
      this.user = { ...user };
    },

    deleteUser(index, id) {
      this.$http
        .delete(`/users/${id}.json`)
        .then(() => {
          this.users.splice(index, 1);
          this.clearFields();
          this.mensagens.push({
            texto: "Operação realizada com sucesso!",
            tipo: "success",
          });
        })
        .catch(() => {
          this.clearFields();
          this.mensagens.push({
            texto: "Problema para excluir!",
            tipo: "danger",
          });
        });
    },

    save(index) {
      //Se for novo
      let method = "post";
      let finalUrl = ".json";

      //Se usuario existe  então é para trocar
      if (this.user.id) {
        method = "patch";
        finalUrl = `/${this.user.id}.json`;
      }
      this.$http[method](`/users${finalUrl}`, this.user)
        .then((response) => {
          //Apaga da lista que modificou
          this.users.splice(index, 1);
          //Pega do response o id
          if (!this.user.id) {
            this.user.id = Object.values(response.data[0])
              .slice(0, -1)
              .join("");
          }
          //Adiciona na lista do usuario
          this.users.push({ ...this.user });
          //Limpa campos
          this.clearFields();
          this.mensagens.push({
            texto: "Operação realizada com sucesso!",
            tipo: "success",
          });
        })
        .catch((error) => {
          this.mensagens.push({
            texto: `Problema: ${error}`,
            tipo: "danger",
          });
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