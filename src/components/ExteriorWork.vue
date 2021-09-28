<template>
  <v-sheet rounded="lg">
    <p class="text-h4 pa-3 mb-2">Exterior Work</p>
    <v-container>
      <work-and-description
        v-for="section in exteriorSections"
        :key="section.id"
        :idProp="section.id"
        :titleProp="section.title"
        :descriptionProp="section.description"
        :workTypeProp="'exterior'"
        class="mb-5"
      >
      </work-and-description>
      <custom-payment
        v-if="exteriorHasCustomTotal"
        :workTypeProp="'exterior'"
      ></custom-payment>
      <v-row>
        <v-col align="right" class="mt-5 mr-3">
          <v-btn
            color="red darken-4"
            outlined
            class="additionButton"
            @click="setExteriorHasCustomTotal(true)"
            :disabled="exteriorHasCustomTotal"
          >
            Add Custom Payment +</v-btn
          >
          <v-btn
            color="red darken-4"
            outlined
            class="additionButton"
            @click="addExteriorSection()"
          >
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
            @click="toggleIsWorkOptionsActiveOn"
          >
            Back To Work Selections
          </v-btn>
          <v-btn
            color="red darken-4"
            class="transitionButton"
            dark
            @click="toggleIsPaymentActiveOn"
          >
            Go To Payment</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import CustomPayment from "./WorkOptions/CustomPayment.vue";
import WorkAndDescription from "./WorkOptions/WorkAndDescription.vue";

export default {
  components: {
    CustomPayment,
    WorkAndDescription,
  },
  computed: {
    ...mapGetters({
      exteriorHasCustomTotal: "getExteriorHasCustomTotal",
      exteriorSections: "getExteriorSections",
    }),
  },
  methods: {
    ...mapMutations({
      addExteriorSection: "addExteriorSection",
      setExteriorHasCustomTotal: "setExteriorHasCustomTotal",
    }),
    ...mapActions({
      toggleIsPaymentActiveOn: "toggleIsPaymentActiveOn",
      toggleIsWorkOptionsActiveOn: "toggleIsWorkOptionsActiveOn",
    }),
  },
};
</script>

<style scoped>
.transitionButton {
  width: 25%;
  margin-left: 35px;
}

.additionButton {
  margin-left: 35px;
}
</style>