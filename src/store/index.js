import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customerEstimate: {
      exterior: {

      },
      interior: {

      },
      personalInformation: {
        coApplicantName: "",
        companyName: "",
        date: new Date(),
        email: "",
        houseToPaintAddress: "",
        houseToPaintCity: "",
        houseToPaintState: "MD",
        houseToPaintZipcode: "",
        isHouseToPaintSameAsPersonal: false,
        name: "",
        personalAddress: "",
        personalCity: "",
        personalState: "MD",
        personalZipcode: "",
        phone: ""
      },
      totalPayment: {

      }
    }
  },
  getters: {
    getCoApplicantName(state) {
      return state.customerEstimate.personalInformation.coApplicantName;
    },
    getCompanyName(state) {
      return state.customerEstimate.personalInformation.companyName;
    },
    getDate(state) {
      return state.customerEstimate.personalInformation.date;
    },
    getEmail(state) {
      return state.customerEstimate.personalInformation.email;
    },
    getHouseToPaintAddress(state) {
      return state.customerEstimate.personalInformation.houseToPaintAddress;
    },
    getHouseToPaintCity(state) {
      return state.customerEstimate.personalInformation.houseToPaintCity;
    },
    getHouseToPaintState(state) {
      return state.customerEstimate.personalInformation.houseToPaintState;
    },
    getHouseToPaintZipcode(state) {
      return state.customerEstimate.personalInformation.houseToPaintZipcode;
    },
    getIsHouseToPaintSameAsPersonal(state) {
      return state.customerEstimate.personalInformation.isHouseToPaintSameAsPersonal;
    },
    getName(state) {
      return state.customerEstimate.personalInformation.name;
    },
    getPersonalAddress(state) {
      return state.customerEstimate.personalInformation.personalAddress;
    },
    getPersonalCity(state) {
      return state.customerEstimate.personalInformation.personalCity;
    },
    getPersonalState(state) {
      return state.customerEstimate.personalInformation.personalState;
    },
    getPersonalZipcode(state) {
      return state.customerEstimate.personalInformation.personalZipcode;
    },
    getPhone(state) {
      return state.customerEstimate.personalInformation.phone;
    }
  },
  mutations: {
    setCoApplicantName(state, val) {
      state.customerEstimate.personalInformation.coApplicantName = val;
    },
    setCompanyName(state, val) {
      state.customerEstimate.personalInformation.companyName = val;
    },
    setDate(state, val) {
      state.customerEstimate.personalInformation.date = val;
    },
    setEmail(state, val) {
      state.customerEstimate.personalInformation.email = val;
    },
    setHouseToPaintAddress(state, val) {
      state.customerEstimate.personalInformation.houseToPaintAddress = val;
    },
    setHouseToPaintCity(state, val) {
      state.customerEstimate.personalInformation.houseToPaintCity = val;
    },
    setHouseToPaintState(state, val) {
      state.customerEstimate.personalInformation.houseToPaintState = val;
    },
    setHouseToPaintZipcode(state, val) {
      state.customerEstimate.personalInformation.houseToPaintZipcode = val;
    },
    setIsHouseToPaintSameAsPersonal(state, val) {
      state.customerEstimate.personalInformation.isHouseToPaintSameAsPersonal = val;
    },
    setName(state, val) {
      state.customerEstimate.personalInformation.name = val;
    },
    setPersonalAddress(state, val) {
      state.customerEstimate.personalInformation.personalAddress = val;
    },
    setPersonalCity(state, val) {
      state.customerEstimate.personalInformation.personalCity = val;
    },
    setPersonalState(state, val) {
      state.customerEstimate.personalInformation.personalState = val;
    },
    setPersonalZipcode(state, val) {
      state.customerEstimate.personalInformation.personalZipcode = val;
    },
    setPhone(state, val) {
      state.customerEstimate.personalInformation.phone = val;
    },
  },
  actions: {
  },
  modules: {
  }
})
