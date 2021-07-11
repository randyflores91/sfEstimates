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
        houseToPaintAddress: "",
        houseToPaintCity: "",
        houseToPaintState: "",
        houseToPaintZipcode: "",
        isHouseToPaintSameAsPersonal: false,
        name: "",
        personalAddress: "",
        personalCity: "",
        personalState: "",
        personalZipcode: ""
      },
      totalPayment: {

      }
    }
  },
  getters: {
    getCoApplicantName(state) {
      return state.coApplicantName;
    },
    getCompanyName(state) {
      return state.companyName;
    },
    getDate(state) {
      return state.date;
    },
    getHouseToPaintAddress(state) {
      return state.houseToPaintAddress;
    },
    getHouseToPaintCity(state) {
      return state.houseToPaintCity;
    },
    getHouseToPaintState(state) {
      return state.houseToPaintState;
    },
    getHouseToPaintZipcode(state) {
      return state.houseToPaintZipcode;
    },
    getIsHouseToPaintSameAsPersonal(state) {
      return state.isHouseToPaintSameAsPersonal;
    },
    getName(state) {
      return state.name;
    },
    getPersonalAddress(state) {
      return state.personalAddress;
    },
    getPersonalCity(state) {
      return state.personalCity;
    },
    getPersonalState(state) {
      return state.personalState;
    },
    getPersonalZipcode(state) {
      return state.personalZipcode;
    }
  },
  mutations: {
    setCoApplicantName(state, val) {
      state.coApplicantName = val;
    },
    setCompanyName(state, val) {
      state.companyName = val;
    },
    setDate(state, val) {
      state.date = val;
    },
    setHouseToPaintAddress(state, val) {
      state.houseToPaintAddress = val;
    },
    setHouseToPaintCity(state, val) {
      state.houseToPaintCity = val;
    },
    setHouseToPaintState(state, val) {
      state.houseToPaintState = val;
    },
    setHouseToPaintZipcode(state, val) {
      state.houseToPaintZipcode = val;
    },
    setIsHouseToPaintSameAsPersonal(state, val) {
      state.isHouseToPaintSameAsPersonal = val;
    },
    setName(state, val) {
      state.name = val;
    },
    setPersonalAddress(state, val) {
      state.personalAddress = val;
    },
    setPersonalCity(state, val) {
      state.personalCity = val;
    },
    setPersonalState(state, val) {
      state.personalState = val;
    },
    setPersonalZipcode(state, val) {
      state.personalZipcode = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
