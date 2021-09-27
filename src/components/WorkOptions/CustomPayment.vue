<template>
  <div class="my-3 pl-5">
    <v-row>
      <v-col cols="11">
        <v-text-field v-model="title" :label="titleLabel"></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn icon color="red" @click="deleteWorkSection({ workType, id })">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>