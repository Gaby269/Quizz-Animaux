<template>
  <v-app>
    <v-app-bar app> </v-app-bar>
    <v-content>
      <MenuDepart />
    </v-content>
  </v-app>
</template>

<script>
import MenuDepart from "./components/MenuDepart.vue";

export default {
  name: "App",

  components: {
    MenuDepart,
  },

  data: () => ({
    //
  }),
};
</script>
