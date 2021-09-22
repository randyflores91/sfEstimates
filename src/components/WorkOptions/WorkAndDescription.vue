<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field v-model="title" :label="titleLabel"></v-text-field>
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
  data: function () {
    return {
      id: this.idProp,
      title: this.titleProp,
      description: this.descriptionProp,
      workType: this.workTypeProp,
    };
  },
  computed: {
    titleLabel() {
      if (this.workType === "customWork") {
        return "Work Title";
      } else if (this.workType === "exterior") {
        return "Exterior Work Title";
      } else if (this.workType === "interior") {
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
    description: function () {
      this.setWorkSectionDescription({
        workType: this.workTypeProp,
        id: this.id,
        description: this.description,
      });
    },
    title: function () {
      this.setWorkSectionTitle({
        workType: this.workTypeProp,
        id: this.id,
        title: this.title,
      });
    },
  },
};
</script>