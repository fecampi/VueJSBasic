<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="user-mail">E-mail</label>
        <input
          type="text"
          v-model="user.email"
          name="user-email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label htmlFor="user-password">Password</label>
        <input
          type="user-password"
          v-model="user.password"
          name="user-password"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      submitted: false,
      user: {
        email: "",
        password: "",
      },
    };
  },

  created() {},
  methods: {
    ...mapActions("account", ["login"]),
    handleSubmit() {
      this.submitted = true;
      const { email, password } = this.user;
      if (email && password) {
        this.login({ email, password });
      }
    },
  },
};
</script>