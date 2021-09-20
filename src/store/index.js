import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sectionActiveBool: {
      isAdditionalWorkActive: false,
      isExteriorActive: false,
      isInteriorActive: false,
      isPaymentActive: false,
      isPersonalInformationActive: true,
      isWorkOptionsActive: false,
    },
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
    // Sections Getters
    getIsAdditionalWorkActive(state) {
      return state.sectionActiveBool.isAdditionalWorkActive;
    },
    getIsExteriorActive(state) {
      return state.sectionActiveBool.isExteriorActive;
    },
    getIsInteriorActive(state) {
      return state.sectionActiveBool.isInteriorActive;
    },
    getIsPaymentActive(state) {
      return state.sectionActiveBool.isPaymentActive;
    },
    getIsPersonalInformationActive(state) {
      return state.sectionActiveBool.isPersonalInformationActive;
    },
    getIsWorkOptionsActive(state) {
      return state.sectionActiveBool.isWorkOptionsActive;
    },

    // Customer Estimate Getters
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
    // Sections Setters
    toggleAllSectionsOff(state) {
      state.sectionActiveBool.isAdditionalWorkActive = false;
      state.sectionActiveBool.isExteriorActive = false;
      state.sectionActiveBool.isInteriorActive = false;
      state.sectionActiveBool.isPaymentActive = false;
      state.sectionActiveBool.isPersonalInformationActive = false;
      state.sectionActiveBool.isWorkOptionsActive = false;
    },
    toggleIsAdditionalWorkActiveOn(state) {
      state.sectionActiveBool.isAdditionalWorkActive = true;
    },
    toggleIsExteriorActiveOn(state) {
      state.sectionActiveBool.isExteriorActive = true;
    },
    toggleIsInteriorActiveOn(state) {
      state.sectionActiveBool.isInteriorActive = true;
    },
    toggleIsPaymentActiveOn(state) {
      state.sectionActiveBool.isPaymentActive = true;
    },
    toggleIsPersonalInformationActiveOn(state) {
      state.sectionActiveBool.isPersonalInformationActive = true;
    },
    toggleIsWorkOptionsActiveOn(state) {
      state.sectionActiveBool.isWorkOptionsActive = true;
    },

    // Customer Estimate Setters
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
    toggleIsAdditionalWorkActiveOn({commit}) {
      commit('toggleAllSectionsOff');
      commit('toggleIsAdditionalWorkActiveOn');
    },
    toggleIsExteriorActiveOn({commit}) {
      commit('toggleAllSectionsOff');
      commit('toggleIsExteriorActiveOn');
    },
    toggleIsInteriorActiveOn({commit}) {
      commit('toggleAllSectionsOff');
      commit('toggleIsInteriorActiveOn');
    },
    toggleIsPaymentActiveOn({commit}) {
      commit('toggleAllSectionsOff');
      commit('toggleIsPaymentActiveOn');
    },
    toggleIsPersonalInformationActiveOn({commit}) {
      commit('toggleAllSectionsOff');
      commit('toggleIsPersonalInformationActiveOn');
    },
    toggleIsWorkOptionsActiveOn({commit}) {
      commit('toggleAllSectionsOff');
      commit('toggleIsWorkOptionsActiveOn');
    },
  },
  modules: {
  }
})
