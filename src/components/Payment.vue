<template>
  <v-sheet rounded="lg">
    <p class="text-h4 pa-3 mb-2">Payment</p>
    <v-container>
      <v-radio-group v-model="column" column>
        <v-radio :label="GeneratedTotalPayments" value="radio-1"></v-radio>
        <v-radio label="Custom Payment" value="radio-2"></v-radio>
      </v-radio-group>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: function () {
    return {
      total: 0,
      workType: this.workTypeProp,
    };
  },
  methods: {
    ...mapActions({
      setWorkTotal: "setWorkTotal",
      deleteWorkTotal: "deleteWorkTotal",
    }),
  },
  watch: {
    total: function () {
      this.setWorkTotal({
        workType: this.workType,
        total: this.total,
      });
    },
  },
};
</script>