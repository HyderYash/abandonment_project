<template>
  <v-navigation-drawer permanent expand-on-hover app dark>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="@/assets/weathercold.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>Yash Sharma</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>
    <v-list nav dense>
      <div v-for="(link, i) in links" :key="i">
        <v-list-item v-if="!link.subLinks" :to="link.to" class="v-list-item">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title v-text="link.text" />
        </v-list-item>

        <v-list-group
          v-else
          :key="link.text"
          no-action
          :prepend-icon="link.icon"
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="sublink in link.subLinks"
            :to="sublink.to"
            :key="sublink.text"
          >
            <v-list-item-icon>
              <v-icon>{{ sublink.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ sublink.text }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </div>
      <v-divider></v-divider>
      <v-list-item
        class="v-list-item"
        style="cursor: pointer"
        @click="darkMode"
      >
        <template>
          <v-list-item-icon v-if="!$vuetify.theme.dark">
            <v-icon>mdi-moon-waning-crescent</v-icon>
          </v-list-item-icon>
          <v-list-item-icon v-else>
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-list-item-icon>

          <v-list-item-content v-if="!$vuetify.theme.dark">
            <v-list-item-title>Dark Mode On</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content v-else>
            <v-list-item-title>Dark Mode Off</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
      <v-list-item to="/" class="v-list-item">
        <v-list-item-icon>
          <v-icon>mdi-logout-variant</v-icon>
        </v-list-item-icon>

        <v-list-item-title v-text="'Logout'" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    links: [
      {
        to: "/dashboard",
        icon: "mdi-view-dashboard",
        text: "Dashboard",
      },
      {
        to: "/profile",
        icon: "mdi-account-box",
        text: "Profile",
      },
      {
        icon: "mdi-folder",
        text: "Templates",
        subLinks: [
          {
            text: "View Templates",
            to: "/dashrttboard",
            icon: "mdi-view-list",
          },
          {
            text: "New Template",
            to: "/dasrtrhboard",
            icon: "mdi-plus",
          },
        ],
      },
    ],
  }),
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
<style scoped>
.v-application--is-ltr
  .v-list--dense.v-list--nav
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding: 0 8px;
}
</style>
