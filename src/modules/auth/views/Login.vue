<template>
  <FullCenter>
    <VForm v-model="isFormValid">
      <VLayout column>
        <div class="body mb-6">Please login</div>
        <VTextField
          solo
          dense
          label="Username"
          required
          :rules="usernameRules"
          v-model="username"
          @keypress.enter="login"
        />
        <VTextField
          solo
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
          <VBtn small color="primary" @click="login">Submit</VBtn>
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
      isFormValid: false,
      username: "",
      usernameRules: [],
      passInputType: "password",
      passRules: [],
    };
  },
  methods: {
    async login() {},
  },
};
</script>
