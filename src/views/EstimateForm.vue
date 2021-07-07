<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="2">
          <customer-estimate-steps/>
        </v-col>

        <v-col>
          <customer-personal-information/>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CustomerEstimateSteps from "../components/CustomerEstimateSteps.vue";
import CustomerPersonalInformation from "../components/CustomerPersonalInformation.vue";

export default {
  data: () => ({
  }),
  components: {
    CustomerEstimateSteps,
    CustomerPersonalInformation
  }
};
</script>
