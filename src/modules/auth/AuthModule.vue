<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "AuthModule",
  mounted() {
    // try to fetch user from here

    if (this.$route.name === "auth") {
      this.$router.replace("/auth/login");
    }
  },
};
</script>
