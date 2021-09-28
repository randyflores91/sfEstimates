<template>
  <v-sheet rounded="lg">
    <p class="text-h4 pa-3 mb-2">Interior Work</p>
    <v-container>
      <work-and-description
        v-for="section in interiorSections"
        :key="section.id"
        :idProp="section.id"
        :titleProp="section.title"
        :descriptionProp="section.description"
        :workTypeProp="'interior'"
        class="mb-5"
      >
      </work-and-description>
      <custom-payment
        v-if="interiorHasCustomTotal"
        :workTypeProp="'interior'"
      ></custom-payment>
      <v-row>
        <v-col align="right" class="mt-5 mr-3">
          <v-btn
            color="red darken-4"
            outlined
            class="additionButton"
            @click="setInteriorHasCustomTotal(true)"
            :disabled="interiorHasCustomTotal"
          >
            Add Custom Payment +</v-btn
          >
          <v-btn
            color="red darken-4"
            outlined
            class="additionButton"
            @click="addInteriorSection()"
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
      interiorHasCustomTotal: "getInteriorHasCustomTotal",
      interiorSections: "getInteriorSections",
    }),
  },
  methods: {
    ...mapMutations({
      addInteriorSection: "addInteriorSection",
      setInteriorHasCustomTotal: "setInteriorHasCustomTotal",
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