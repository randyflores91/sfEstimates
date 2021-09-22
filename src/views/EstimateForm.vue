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
          <template v-if="isExteriorActive">
            <exterior-work />
          </template>
          <template v-if="isInteriorActive">
            <interior-work />
          </template>
          <template v-if="isCustomWorkActive">
            <custom-work />
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CustomerEstimateSteps from "../components/CustomerEstimateSteps.vue";
import CustomerPersonalInformation from "../components/CustomerPersonalInformation.vue";
import CustomWork from "../components/CustomWork.vue";
import ExteriorWork from "../components/ExteriorWork.vue";
import InteriorWork from "../components/InteriorWork.vue";
import WorkOptions from "../components/WorkOptions.vue";
import { mapGetters } from "vuex";

export default {
  data: () => ({}),
  components: {
    CustomerEstimateSteps,
    CustomerPersonalInformation,
    CustomWork,
    ExteriorWork,
    InteriorWork,
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
