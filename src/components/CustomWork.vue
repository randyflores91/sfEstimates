<template>
  <v-sheet rounded="lg">
    <v-container>
      <work-and-description
        v-for="section in sections"
        :key="section.id"
        :idProp="section.id"
        :titleProp="section.title"
        :descriptionProp="section.description"
        :workTypeProp="'customWork'"
      >
      </work-and-description>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
import WorkAndDescription from "./WorkOptions/WorkAndDescription.vue";
export default {
  components: {
    WorkAndDescription,
  },
  computed: {
    sections() {
      let keys = Object.keys(this.customWorkSections());
      return keys.map((key) => this.customWorkSections()[key]);
    },
  },
  methods: {
    ...mapGetters({
      customWorkSections: "getCustomWorkSections",
    }),
  },
};
</script>