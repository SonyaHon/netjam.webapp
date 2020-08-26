<template>
  <v-app>
    <template v-if="inited">
      <v-navigation-drawer app v-if="showNavBar">
        <v-layout column fill-height justify-space-between>
          <navigation-drawer></navigation-drawer>
          <v-list>
            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon> mdi-logout </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> Sign out </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-layout>
      </v-navigation-drawer>
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
import NavigationDrawer from "@/components/NavigationDrawer.vue";

export default {
  name: "App",
  components: { FullCenter, NavigationDrawer },
  data() {
    return {
      inited: false,
    };
  },
  computed: {
    showNavBar() {
      return !this.$route.meta.hideNav;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("nj-jwt-token");
      location.reload();
    },
  },
  async mounted() {
    const result = await this.$store.dispatch(
      "auth/fetchSelf",
      localStorage.getItem("nj-jwt-token"),
    );
    switch (result) {
      case "login":
        if (this.$route.name !== "auth.login") {
          await this.$router.push("/auth/login");
        }
        break;
      case "ok":
        if (this.$route.name !== "main.home" && this.$route.name !== "main") {
          await this.$router.push("/");
        }
        break;
      case "error":
        break;
    }

    this.inited = true;
  },
};
</script>
