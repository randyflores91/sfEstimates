<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="2">
          <customer-estimate-steps />
        </v-col>

        <v-col>
          <template v-if="isPersonalInformationActive">
            <customer-personal-information />
          </template>
          <template v-if="isWorkOptionsActive">
            <work-options />
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CustomerEstimateSteps from "../components/CustomerEstimateSteps.vue";
import CustomerPersonalInformation from "../components/CustomerPersonalInformation.vue";
import WorkOptions from "../components/WorkOptions.vue";
import { mapGetters } from "vuex";

export default {
  data: () => ({}),
  components: {
    CustomerEstimateSteps,
    CustomerPersonalInformation,
    WorkOptions,
  },
  computed: {
    ...mapGetters({
      isCustomWorkActive: "getIsCustomWorkActive",
      isExteriorActive: "getIsExteriorActive",
      isInteriorActive: "getIsInteriorActive",
      isPaymentActive: "getIsPaymentActive",
      isPersonalInformationActive: "getIsPersonalInformationActive",
      isWorkOptionsActive: "getIsWorkOptionsActive",
    }),
  },
};
</script>
