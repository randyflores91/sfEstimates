<template>
  <v-app>
    <v-app-bar app dark color="red darken-4">
      <v-container class="py-0 fill-height">
        <v-toolbar-title class="d-flex align-center">
          Santos Flores Painting Services Inc.
        </v-toolbar-title>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
