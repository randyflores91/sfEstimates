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
      <v-list-group
        :value="true"
        color="grey lighten-4"
        @click="toggleIsWorkOptionsActiveOn()"
      >
        <template v-slot:activator>
          <v-list-item-title>Work Description</v-list-item-title>
        </template>

        <v-list-item
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
          link
          class="pl-9"
          color="grey lighten-4"
          @click="toggleIsAdditionalWorkActiveOn()"
        >
          <v-list-item-content>
            <v-list-item-title> Additional Work </v-list-item-title>
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
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      toggleIsAdditionalWorkActiveOn: "toggleIsAdditionalWorkActiveOn",
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