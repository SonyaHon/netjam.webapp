<template>
  <full-center>
    <v-form v-model="formValid" ref="form">
      <v-layout column class="nj-form">
        <div class="text-h5 mb-6">Sign in</div>
        <v-text-field
          dense
          outlined
          v-model="username"
          label="Username"
          :rules="rules"
          @keypress.enter="login"
        ></v-text-field>
        <v-text-field
          dense
          outlined
          label="Password"
          v-model="password"
          :rules="rules"
          :type="togglePassword ? 'text' : 'password'"
          :append-icon="togglePassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append="togglePassword = !togglePassword"
        ></v-text-field>
        <v-btn color="primary" class="mb-3" @click="login">Submit</v-btn>
        <router-link to="/auth/register" class="caption text-right">
          Register instead
        </router-link>
      </v-layout>
    </v-form>
  </full-center>
</template>

<script>
import FullCenter from "@/components/layouts/FullCenter.vue";
export default {
  name: "Login",
  components: { FullCenter },
  data() {
    return {
      formValid: true,
      username: "",
      password: "",
      rules: [v => !!v || "Field is required"],
      togglePassword: false,
    };
  },
  methods: {
    async login() {
      this.$refs.form.validate();
      if (!this.formValid) return;
      try {
        await this.$store.dispatch("auth/login", {
          username: this.username,
          password: this.password,
        });
      } catch (e) {
        // @todo add something here
      }
      this.$router.replace("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.nj-form {
  min-width: 300px;
  width: 300px;
}
</style>
