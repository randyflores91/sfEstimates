<template>
  <v-sheet rounded="lg">
    <v-container>
      <v-row>
        <v-col>
          <v-form ref="form" class="mx-5">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Full Name"
              required
            ></v-text-field>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data: () => ({
    nameRules: [
      (name) => !!name || "Name is required",
      (v) => (v && v.length >= 3) || "Name must be more than 3 characters",
    ],
  }),
  components: {},
  computed: {
    ...mapGetters({
      getCoApplicantName: "getCoApplicantName",
      getCompanyName: "getCompanyName",
      getDate: "getDate",
      getHouseToPaintAddress: "getHouseToPaintAddress",
      getHouseToPaintCity: "getHouseToPaintCity",
      getHouseToPaintState: "getHouseToPaintState",
      getHouseToPaintZipcode: "getHouseToPaintZipcode",
      getIsHouseToPaintSameAsPersonal: "getIsHouseToPaintSameAsPersonal",
      getName: "getName",
      getPersonalAddress: "getPersonalAddress",
      getPersonalCity: "getPersonalCity",
      getPersonalState: "getPersonalState",
      getPersonalZipcode: "getPersonalZipcode",
    }),
    coApplicantName: {
      get() {
        return this.getCoApplicantName;
      },
      set(val) {
        this.$store.commit(this.setCoApplicantName(val));
      },
    },
    companyName: {
      get() {
        return this.getCompanyName;
      },
      set(val) {
        this.$store.commit(this.setCompanyName(val));
      },
    },
    date: {
      get() {
        return this.getDate;
      },
      set(val) {
        this.$store.commit(this.setDate(val));
      },
    },
    houseToPaintAddress: {
      get() {
        return this.getHouseToPaintAddress;
      },
      set(val) {
        this.$store.commit(this.setHouseToPaintAddress(val));
      },
    },
    houseToPaintCity: {
      get() {
        return this.getHouseToPaintCity;
      },
      set(val) {
        this.$store.commit(this.setHouseToPaintCity(val));
      },
    },
    houseToPaintState: {
      get() {
        return this.getHouseToPaintState;
      },
      set(val) {
        this.$store.commit(this.setHouseToPaintState(val));
      },
    },
    houseToPaintZipcode: {
      get() {
        return this.getHouseToPaintZipcode;
      },
      set(val) {
        this.$store.commit(this.setHouseToPaintZipcode(val));
      },
    },
    isHouseToPaintSameAsPersonal: {
      get() {
        return this.getIsHouseToPaintSameAsPersonal;
      },
      set(val) {
        this.$store.commit(this.setIsHouseToPaintSameAsPersonal(val));
      },
    },
    name: {
      get() {
        return this.getName;
      },
      set(val) {
        console.log(val);
        this.setName(val);
      },
    },
    personalAddress: {
      get() {
        return this.getPersonalAddress;
      },
      set(val) {
        this.$store.commit(this.setPersonalAddress(val));
      },
    },
    personalCity: {
      get() {
        return this.getPersonalCity;
      },
      set(val) {
        this.$store.commit(this.setPersonalCity(val));
      },
    },
    personalState: {
      get() {
        return this.getPersonalState;
      },
      set(val) {
        this.$store.commit(this.setPersonalState(val));
      },
    },
    personalZipcode: {
      get() {
        return this.getPersonalZipcode;
      },
      set(val) {
        this.$store.commit(this.setPersonalZipcode(val));
      },
    },
  },
  methods: {
    ...mapMutations({
      setCoApplicantName: "setCoApplicantName",
      setCompanyName: "setCompanyName",
      setDate: "setDate",
      setHouseToPaintAddress: "setHouseToPaintAddress",
      setHouseToPaintCity: "setHouseToPaintCity",
      setHouseToPaintState: "setHouseToPaintState",
      setHouseToPaintZipcode: "setHouseToPaintZipcode",
      setIsHouseToPaintSameAsPersonal: "setIsHouseToPaintSameAsPersonal",
      setName: "setName",
      setPersonalAddress: "setPersonalAddress",
      setPersonalCity: "setPersonalCity",
      setPersonalState: "setPersonalState",
      setPersonalZipcode: "setPersonalZipcode",
    }),
  },
};
</script>