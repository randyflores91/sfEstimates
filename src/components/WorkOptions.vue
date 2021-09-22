<template>
  <v-sheet rounded="lg">
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://cdn4.iconfinder.com/data/icons/build-a-house-outline/512/house_home_estate_architecture_building_real-512.png"
              height="200px"
            ></v-img>

            <v-card-title> Exterior Work </v-card-title>
            <v-card-subtitle>
              Describe all Exterior Work needed
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                v-if="!hasExterior()"
                color="orange lighten-2"
                text
                @click="addExterior()"
              >
                Add Exterior Work
              </v-btn>
              <v-btn
                v-else
                color="orange lighten-2"
                text
                @click="editExterior()"
              >
                Edit Exterior Work
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://cdn4.iconfinder.com/data/icons/build-a-house-outline/512/interior_room_furniture_home_design_living_house_sofa_lamp-512.png"
              height="200px"
            ></v-img>

            <v-card-title> Interior Work </v-card-title>
            <v-card-subtitle>
              Describe all Interior Work needed
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                v-if="!hasInterior()"
                color="orange lighten-2"
                text
                @click="addInterior()"
              >
                Add Interior Work
              </v-btn>
              <v-btn
                v-else
                color="orange lighten-2"
                text
                @click="editInterior()"
              >
                Edit Interior Work
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://cdn4.iconfinder.com/data/icons/build-a-house-outline/512/color_wall_interior_painter_roller_renovation_paint_repair_design-512.png"
              height="200px"
            ></v-img>

            <v-card-title> Custom Work </v-card-title>
            <v-card-subtitle> Describe all Custom Work needed </v-card-subtitle>
            <v-card-actions>
              <v-btn
                v-if="!hasCustomWork()"
                color="orange lighten-2"
                text
                @click="addCustomWork()"
              >
                Add Custom Work
              </v-btn>
              <v-btn
                v-else
                color="orange lighten-2"
                text
                @click="editCustomWork()"
              >
                Edit Custom Work
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapGetters({
      hasCustomWork: "getHasCustomWork",
      hasExterior: "getHasExterior",
      hasInterior: "getHasInterior",
    }),
    ...mapMutations({
      addCustomWorkSection: "addCustomWorkSection",
      addExteriorSection: "addExteriorSection",
      addInteriorSection: "addInteriorSection",
      setHasCustomWork: "setHasCustomWork",
      setHasExterior: "setHasExterior",
      setHasInterior: "setHasInterior",
    }),
    ...mapActions({
      toggleIsCustomWorkActiveOn: "toggleIsCustomWorkActiveOn",
      toggleIsExteriorActiveOn: "toggleIsExteriorActiveOn",
      toggleIsInteriorActiveOn: "toggleIsInteriorActiveOn",
      toggleIsPaymentActiveOn: "toggleIsPaymentActiveOn",
      toggleIsPersonalInformationActiveOn:
        "toggleIsPersonalInformationActiveOn",
    }),
    addCustomWork() {
      this.setHasCustomWork(true);
      this.addCustomWorkSection({ id: this.$uuid.v4() });
      this.toggleIsCustomWorkActiveOn();
    },
    addExterior() {
      this.setHasExterior(true);
      this.addExteriorSection({ id: this.$uuid.v4() });
      this.toggleIsExteriorActiveOn();
    },
    addInterior() {
      this.setHasInterior(true);
      this.addInteriorSection({ id: this.$uuid.v4() });
      this.toggleIsInteriorActiveOn();
    },
    editCustomWork() {
      this.toggleIsCustomWorkActiveOn();
    },
    editExterior() {
      this.toggleIsExteriorActiveOn();
    },
    editInterior() {
      this.toggleIsInteriorActiveOn();
    },
  },
};
</script>