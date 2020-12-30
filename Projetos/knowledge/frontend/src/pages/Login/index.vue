

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="user-email">E-mail</label>
        <input
          type="text"
          v-model="user.email"
          name="user-email"
          class="form-control"
          :class="{ 'is-invalid': submitted && !user.email }"
        />
        <div v-show="submitted && !user.email" class="invalid-feedback">
          Digite um e-mail válido
        </div>
      </div>
      <div class="form-group">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          v-model="user.password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !user.password }"
        />
        <div v-show="submitted && !user.password" class="invalid-feedback">
          Senha obrigatória
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>

        <router-link to="/register" class="btn btn-link">Register</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'



export default {
  data() {
    return {
      user: {},
      submitted: false,
    };
  },
  computed: {},
  created() {
    // reset login status
  },

  methods: {
      ...mapActions('userAuth', ['login']),
    handleSubmit() {
      this.submitted = true;
      const { email, password } = this.user;
      if (email && password) {
        console.log("handlesubmit");
        this.login({ email, password })
      }
    },
  },
};
</script>