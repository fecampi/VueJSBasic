<template>
  <div class="auth-content">
    <form @submit.prevent="handleSubmit" class="auth-modal">
      <img src="@/assets/logo.png" width="200" alt="Logo" />
      <hr />
      <div class="auth-title">Faça seu cadastro</div>
      <input v-model="user.name" type="text" placeholder="Nome" />
      <input
        v-model="user.email"
        name="email"
        type="text"
        placeholder="E-mail"
      />
      <input
        v-model="user.password"
        name="password"
        type="password"
        placeholder="Senha"
      />
      <input
        v-model="user.confirmPassword"
        type="password"
        placeholder="Confirme a Senha"
      />
      <b-button block variant="primary" @click="handleSubmit()"
        >Cadastrar</b-button
      >
      <router-link to="/signin" class="btn btn-link">
        Voltar para Logon</router-link
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      const { name, email, password, confirmPassword } = this.user;
      if (email && password) {
        this.login({ name,email, password,confirmPassword });
      }
    },
  },
};
</script>

<style>
</style>

