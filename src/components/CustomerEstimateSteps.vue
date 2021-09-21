<template>
  <v-sheet rounded="lg">
    <v-list color="red darken-1">
      <v-list-item
        link
        color="grey lighten-4"
        @click="toggleIsPersonalInformationActiveOn()"
      >
        <v-list-item-content>
          <v-list-item-title> Personal Information </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="!(hasExterior() || hasInterior() || hasCustomWork())"
        link
        color="grey lighten-4"
        @click="toggleIsWorkOptionsActiveOn()"
      >
        <v-list-item-content>
          <v-list-item-title> Work Description </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group
        v-else
        :value="true"
        color="grey lighten-4"
        @click="toggleIsWorkOptionsActiveOn()"
      >
        <template v-slot:activator>
          <v-list-item-title>Work Description</v-list-item-title>
        </template>

        <v-list-item
          v-if="hasExterior()"
          link
          class="pl-9"
          color="grey lighten-4"
          @click="toggleIsExteriorActiveOn()"
        >
          <v-list-item-content>
            <v-list-item-title> Exterior </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="hasInterior()"
          link
          class="pl-9"
          color="grey lighten-4"
          @click="toggleIsInteriorActiveOn()"
        >
          <v-list-item-content>
            <v-list-item-title> Interior </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="hasCustomWork()"
          link
          class="pl-9"
          color="grey lighten-4"
          @click="toggleIsCustomWorkActiveOn()"
        >
          <v-list-item-content>
            <v-list-item-title> Custom Work </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item
        link
        color="grey lighten-4"
        @click="toggleIsPaymentActiveOn()"
      >
        <v-list-item-content>
          <v-list-item-title> Payment </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-sheet>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapGetters({
      hasCustomWork: "getHasCustomWork",
      hasExterior: "getHasExterior",
      hasInterior: "getHasInterior",
    }),
    ...mapActions({
      toggleIsCustomWorkActiveOn: "toggleIsCustomWorkActiveOn",
      toggleIsExteriorActiveOn: "toggleIsExteriorActiveOn",
      toggleIsInteriorActiveOn: "toggleIsInteriorActiveOn",
      toggleIsPaymentActiveOn: "toggleIsPaymentActiveOn",
      toggleIsPersonalInformationActiveOn:
        "toggleIsPersonalInformationActiveOn",
      toggleIsWorkOptionsActiveOn: "toggleIsWorkOptionsActiveOn",
    }),
  },
};
</script>

<style>
.selectedActive {
  color: "grey lighten-4";
}

.notSelected {
  color: "black";
}
</style>