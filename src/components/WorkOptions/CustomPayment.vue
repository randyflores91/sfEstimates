<template>
  <div class="my-5 pl-2">
    <v-row>
      <v-col cols="5">
        <v-text-field
          v-model="total"
          label="Payment Total"
          prefix="$"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn icon color="red" @click="deleteWorkTotal({ workType })">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    workTypeProp: String,
  },
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