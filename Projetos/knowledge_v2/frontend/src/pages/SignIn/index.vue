<template>
  <div class="auth-content">
    <form @submit.prevent="handleSubmit" class="auth-modal">
      <img src="@/assets/logo.png" width="200" alt="Logo" />
      <hr />
      <div class="auth-title">Faça seu logon</div>
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
      <b-button block variant="primary" @click="handleSubmit()"
        >Entrar</b-button
      >
      <router-link to="/signUp" class="btn btn-link"> Criar conta</router-link>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  created() {
    // this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    handleSubmit() {
      const { email, password } = this.user;
      if (email && password) {
        this.login({ email, password });
      }
    },
  },
};
</script>