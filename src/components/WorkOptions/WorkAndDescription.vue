<template>
  <div>
    <v-card class="mt-2 mb-9 pl-5">
      <v-row>
        <v-col cols="11">
          <v-text-field v-model="title" :label="titleLabel"></v-text-field>
          <v-textarea v-model="description" label="Description"></v-textarea>
        </v-col>
        <v-col cols="1">
          <v-btn icon color="red" @click="deleteWorkSection({ workType, id })">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
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
      deleteWorkSection: "deleteWorkSection",
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