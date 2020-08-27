<template>
  <v-list class="fill-height">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          NETJAM STACK
        </v-list-item-title>
        <v-list-item-subtitle>
          Logged in as
          <span class="font-weight-bold black--text">{{
            $store.state.auth.user.username
          }}</span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-list-item
      v-for="(item, index) in [...items, ...$store.state.auth.navbar.items]"
      :key="index"
      :to="item.to"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title> {{ item.title }} </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      items: [
        {
          title: "Home",
          to: "/",
          icon: "mdi-home",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
