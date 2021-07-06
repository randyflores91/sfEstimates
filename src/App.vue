<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="deep-purple accent-4"
    >
      <v-toolbar-title class="d-flex align-center">
        Santos Flores Painting Services Inc.
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
