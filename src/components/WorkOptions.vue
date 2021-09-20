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
              <v-btn color="orange lighten-2" text> Add Exterior Work </v-btn>
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
              <v-btn color="orange lighten-2" text> Add Interior Work </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://cdn4.iconfinder.com/data/icons/build-a-house-outline/512/color_wall_interior_painter_roller_renovation_paint_repair_design-512.png"
              height="200px"
            ></v-img>

            <v-card-title> Additional Work </v-card-title>
            <v-card-subtitle>
              Describe all Additional Work needed
            </v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text> Add Additional Work </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>