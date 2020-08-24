<template>
  <FullCenter>
    <VForm v-model="isFormValid" ref="form">
      <VLayout column>
        <div class="body mb-6">Please login</div>
        <VTextField
          outlined
          dense
          label="Username"
          required
          :rules="usernameRules"
          v-model="username"
          @keypress.enter="login"
        />
        <VTextField
          outlined
          dense
          :type="passInputType"
          v-model="password"
          label="Password"
          :rules="passRules"
          required
          :append-icon="
            passInputType === 'password' ? 'mdi-eye' : 'mdi-eye-off'
          "
          @click:append="
            passInputType = passInputType === 'password' ? 'text' : 'password'
          "
          @keypress.enter="login"
        />
        <VLayout row>
          <VSpacer />
          <VBtn small class="mr-3" color="primary" @click="login">Submit</VBtn>
        </VLayout>
      </VLayout>
    </VForm>
  </FullCenter>
</template>

<script>
import FullCenter from "@/components/layouts/FullCenter.vue";
export default {
  name: "Login",
  components: { FullCenter },
  data() {
    return {
      isFormValid: true,
      username: "",
      usernameRules: [v => (!v ? "Please provide a username" : true)],
      passInputType: "password",
      passRules: [v => (!v ? "Please provide a password" : true)],
      password: "",
    };
  },
  methods: {
    async login() {
      if (!this.$refs.form) return;
      this.$refs.form.validate();
      if (!this.isFormValid) return;
      console.log("Some cool stuff");
      this.$store.dispatch("auth/fetchUser");
    },
  },
};
</script>
