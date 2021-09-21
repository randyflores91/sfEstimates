<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field v-model="title" :label="titleLabel()"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea v-model="description" label="Description"></v-textarea>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    idProp: String,
    titleProp: String,
    descriptionProp: String,
    workTypeProp: String,
  },
  data: () => ({
    id: idProp,
    title: titleProp,
    description: descriptionProp,
    workType: workTypeProp,
  }),
  computed: {
    titleLabel() {
      if (workType === "customWork") {
        return "Work Title";
      } else if (workType === "exterior") {
        return "Exterior Work Title";
      } else if (workType === "interior") {
        return "Room/Interior Work Title";
      }
    },
  },
  methods: {
    ...mapActions({
      setWorkSectionDescription: "setWorkSectionDescription",
      setWorkSectionTitle: "setWorkSectionTitle",
    }),
  },
  watch: {
    description: function (newVal) {
      this.setWorkSectionDescription({ workType, id, description });
    },
    title: function (newVal) {
      this.setWorkSectionTitle({ workType, id, title });
    },
  },
};
</script>