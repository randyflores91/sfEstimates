<template>
  <v-sheet rounded="lg">
    <p class="text-h4 pa-3 mb-2">Exterior Work</p>
    <v-container>
      <work-and-description
        v-for="section in sections"
        :key="section.id"
        :idProp="section.id"
        :titleProp="section.title"
        :descriptionProp="section.description"
        :workTypeProp="'exterior'"
        class="mb-5"
      >
      </work-and-description>
      <v-row>
        <v-col align="right" class="mt-5 mr-3">
          <v-btn color="red darken-4" outlined @click="addExteriorSection()">
            Add Additional Work +</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col align="right" class="mt-5 mr-3">
          <v-btn
            color="red darken-4"
            class="transitionButton"
            dark
            @click="addExteriorSection()"
          >
            Back To Work Selections
          </v-btn>
          <v-btn
            color="red darken-4"
            class="transitionButton"
            dark
            @click="addExteriorSection()"
          >
            Go To Payment</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import WorkAndDescription from "./WorkOptions/WorkAndDescription.vue";
export default {
  components: {
    WorkAndDescription,
  },
  computed: {
    sections() {
      let keys = Object.keys(this.exteriorSections());
      return keys.map((key) => this.exteriorSections()[key]);
    },
  },
  methods: {
    ...mapGetters({
      exteriorSections: "getExteriorSections",
    }),
    ...mapMutations({
      addExteriorSection: "addExteriorSection",
    }),
  },
};
</script>

<style scoped>
.transitionButton {
  width: 25%;
  margin-left: 35px;
}
</style>