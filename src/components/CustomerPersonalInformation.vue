<template>
  <v-sheet rounded="lg">
    <v-container>
      <v-row>
        <v-col>
          <v-form ref="form" class="mx-7">
            <div class="text-h5 mt-5 mb-2">Name</div>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Full Name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="coApplicantName"
                  label="Co-Applicant's Full Name (Optional)"
                ></v-text-field>
                <v-text-field
                  v-model="companyName"
                  label="Company Name (Optional)"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="phone"
                  label="Phone Number"
                ></v-text-field
                ><v-text-field v-model="email" label="Email"></v-text-field
              ></v-col>
            </v-row>
            <div class="text-h5 mt-7">House Address</div>
            <div class="text-subtitle-2 mt-1 mb-2">
              Address where the painting job will be done.
            </div>
            <v-text-field
              v-model="houseToPaintAddress"
              label="Address"
              required
            ></v-text-field>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="houseToPaintCity"
                  label="City"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-select
                  v-model="personalState"
                  :items="states"
                  item-text="key"
                  item-value="value"
                  label="State"
                ></v-select
              ></v-col>
              <v-col
                ><v-text-field
                  v-model="houseToPaintZipcode"
                  label="Zipcode"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-checkbox
              v-model="isHouseToPaintSameAsPersonal"
              label="Same as Billing Address"
            ></v-checkbox>
            <div v-if="!isHouseToPaintSameAsPersonal">
              <div class="text-h5 mt-7 mb-2">House Address</div>
              <v-text-field
                v-model="personalAddress"
                label="Address"
                required
              ></v-text-field>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="personalCity"
                    label="City"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                    v-model="personalState"
                    :items="states"
                    item-text="key"
                    item-value="value"
                    label="State"
                  ></v-select
                ></v-col>
                <v-col
                  ><v-text-field
                    v-model="personalZipcode"
                    label="Zipcode"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { STATES } from "../constants/states";

export default {
  data: () => ({
    nameRules: [
      (name) => !!name || "Name is required",
      (v) => (v && v.length >= 3) || "Name must be more than 3 characters",
    ],
    states: STATES,
  }),
  components: {},
  computed: {
    ...mapGetters({
      getCoApplicantName: "getCoApplicantName",
      getCompanyName: "getCompanyName",
      getDate: "getDate",
      getEmail: "getEmail",
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
      getPhone: "getPhone",
    }),
    coApplicantName: {
      get() {
        return this.getCoApplicantName;
      },
      set(val) {
        this.setCoApplicantName(val);
      },
    },
    companyName: {
      get() {
        return this.getCompanyName;
      },
      set(val) {
        this.setCompanyName(val);
      },
    },
    date: {
      get() {
        return this.getDate;
      },
      set(val) {
        this.setDate(val);
      },
    },
    email: {
      get() {
        return this.getEmail;
      },
      set(val) {
        this.setEmail(val);
      },
    },
    houseToPaintAddress: {
      get() {
        return this.getHouseToPaintAddress;
      },
      set(val) {
        this.setHouseToPaintAddress(val);
      },
    },
    houseToPaintCity: {
      get() {
        return this.getHouseToPaintCity;
      },
      set(val) {
        this.setHouseToPaintCity(val);
      },
    },
    houseToPaintState: {
      get() {
        return this.getHouseToPaintState;
      },
      set(val) {
        this.setHouseToPaintState(val);
      },
    },
    houseToPaintZipcode: {
      get() {
        return this.getHouseToPaintZipcode;
      },
      set(val) {
        this.setHouseToPaintZipcode(val);
      },
    },
    isHouseToPaintSameAsPersonal: {
      get() {
        return this.getIsHouseToPaintSameAsPersonal;
      },
      set(val) {
        this.setIsHouseToPaintSameAsPersonal(val);
      },
    },
    name: {
      get() {
        return this.getName;
      },
      set(val) {
        this.setName(val);
      },
    },
    personalAddress: {
      get() {
        return this.getPersonalAddress;
      },
      set(val) {
        this.setPersonalAddress(val);
      },
    },
    personalCity: {
      get() {
        return this.getPersonalCity;
      },
      set(val) {
        this.setPersonalCity(val);
      },
    },
    personalState: {
      get() {
        return this.getPersonalState;
      },
      set(val) {
        this.setPersonalState(val);
      },
    },
    personalZipcode: {
      get() {
        return this.getPersonalZipcode;
      },
      set(val) {
        this.setPersonalZipcode(val);
      },
    },
    phone: {
      get() {
        return this.getPhone;
      },
      set(val) {
        this.setPhone(val);
      },
    },
  },
  methods: {
    ...mapMutations({
      setCoApplicantName: "setCoApplicantName",
      setCompanyName: "setCompanyName",
      setDate: "setDate",
      setEmail: "setEmail",
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
      setPhone: "setPhone",
    }),
  },
};
</script>