<template>
  <full-center>
    <v-form v-model="formValid" ref="form">
      <v-layout column class="nj-form">
        <div class="text-h5 mb-6">Register</div>
        <v-text-field
          dense
          outlined
          label="Username"
          v-model="username"
          :rules="usernameRules"
          @keypress.enter="tryRegister"
        ></v-text-field>
        <v-text-field
          dense
          outlined
          label="Password"
          v-model="passwordOne"
          :type="togglePassOne ? 'text' : 'password'"
          :rules="passwordOneRules"
          :append-icon="togglePassOne ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append="togglePassOne = !togglePassOne"
          @keypress.enter="tryRegister"
        ></v-text-field>
        <v-text-field
          dense
          outlined
          label="Repeat password"
          v-model="passwordTwo"
          :type="togglePassTwo ? 'text' : 'password'"
          :rules="passwordTwoRules"
          :append-icon="togglePassTwo ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append="togglePassTwo = !togglePassTwo"
          @keypress.enter="tryRegister"
        ></v-text-field>
        <v-btn color="primary" class="mb-3" @click="tryRegister">Submit</v-btn>
        <router-link to="/auth/login" class="caption text-right">
          Login instead
        </router-link>
      </v-layout>
    </v-form>
  </full-center>
</template>

<script>
import FullCenter from "@/components/layouts/FullCenter.vue";
export default {
  name: "Register",
  components: { FullCenter },
  data() {
    return {
      formValid: true,
      username: "",
      passwordOne: "",
      passwordTwo: "",

      usernameRules: [v => !!v || "Field is required"],
      passwordOneRules: [
        v => !!v || "Field is required",
        v => v.length >= 8 || "Minimum 8 characters",
      ],
      passwordTwoRules: [
        v => !!v || "Field is required",
        v => v === this.passwordOne || "Passwords do not match",
      ],

      togglePassOne: false,
      togglePassTwo: false,
    };
  },
  methods: {
    async tryRegister() {
      this.$refs.form.validate();
      if (!this.formValid) return;
      const res = await this.$store.dispatch("auth/register", {
        username: this.username,
        password: this.passwordOne,
      });
      console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
.nj-form {
  min-width: 300px;
  width: 300xp;
}
</style>
