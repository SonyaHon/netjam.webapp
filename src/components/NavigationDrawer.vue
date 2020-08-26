<template>
  <v-list class="fill-height">
    <v-list-item v-for="(item, index) in items" :key="index" :to="item.to">
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
          title: "Projects",
          to: "/main/projects",
          icon: "mdi-apps",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
