<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    expand-on-hover
    dark
    app
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="@/assets/weathercold.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>Yash Sharma</v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>
    <v-list nav dense>
      <div v-for="(link, i) in links" :key="i">
        <v-list-item
          v-if="!link.subLinks"
          :to="link.to"
          :active-class="color"
          avatar
          class="v-list-item"
        >
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
      {
        to: "/",
        icon: "mdi-logout-variant",
        text: "Logout",
      },
    ],
  }),
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
