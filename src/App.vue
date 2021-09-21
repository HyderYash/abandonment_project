<template>
  <v-app id="inspire">
    <v-main>
      <Sidebar v-if="!$route.meta.hideNavbar" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  name: "App",

  components: {
    Sidebar,
  },
};
</script>
