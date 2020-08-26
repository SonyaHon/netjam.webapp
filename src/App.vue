<template>
  <v-app>
    <template v-if="inited">
      <v-main app>
        <router-view></router-view>
      </v-main>
    </template>
    <template v-else>
      <full-center>
        <v-progress-circular
          color="secondary"
          indeterminate
        ></v-progress-circular>
      </full-center>
    </template>
  </v-app>
</template>

<script>
import FullCenter from "@/components/layouts/FullCenter.vue";
export default {
  name: "App",
  components: { FullCenter },
  data() {
    return {
      inited: false,
    };
  },
  async mounted() {
    const result = await this.$store.dispatch("auth/fetchSelf");
    switch (result) {
      case "login":
        if (this.$route.name !== "auth.login") {
          await this.$router.push("/auth/login");
        }
        break;
      case "ok":
        if (this.$route.name !== "main.home") {
          await this.$router.push("/main/home");
        }
        break;
      case "error":
        break;
    }
    this.inited = true;
  },
};
</script>
