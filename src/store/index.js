import Vue from 'vue'
import Vuex from 'vuex'
import { uuid } from 'vue-uuid';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customerEstimate: {
      customWork: {
        hasCustomTotal: false,
        total: 0,
        workSections: [],
      },
      exterior: {
        hasCustomTotal: false,
        total: 0,
        workSections: [],
      },
      interior: {
        hasCustomTotal: false,
        total: 0,
        workSections: [],
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
        customPayment: 0,
        finalPayment: 0,
        generatedPayment: 0,
        hasGeneratedPayment: false,
      }
    },
    sectionActiveBool: {
      isCustomWorkActive: false,
      isExteriorActive: false,
      isInteriorActive: false,
      isPaymentActive: false,
      isPersonalInformationActive: true,
      isWorkOptionsActive: false,
    },
    workOptions: {
      hasCustomWork: false,
      hasExterior: false,
      hasInterior: false
    }
  },
  getters: {
    // Payment Options Getters
    getCustomPayment(state) {
      return state.customerEstimate.totalPayment.customPayment;
    },
    getFinalPayment(state) {
      return state.customerEstimate.totalPayment.finalPayment;
    },
    getGeneratedPayment(state) {
      return state.customerEstimate.totalPayment.generatedPayment;
    },
    getHasGeneratedPayment(state) {
      return state.customerEstimate.totalPayment.hasGeneratedPayment;
    },

    // Custom Work Getters
    getCustomWorkHasCustomTotal(state) {
      return state.customerEstimate.customWork.hasCustomTotal;
    },
    getCustomWorkTotal(state) {
      return state.customerEstimate.customWork.total;
    },
    getCustomWorkSection: (state) => (id) => {
      return state.customerEstimate.customWork.workSections.find(sec => sec.id === id);
    },
    getCustomWorkSections(state) {
      return state.customerEstimate.customWork.workSections;
    },
    
    // Exterior Getters
    getExteriorHasCustomTotal(state) {
      return state.customerEstimate.exterior.hasCustomTotal;
    },
    getExteriorTotal(state) {
      return state.customerEstimate.exterior.total;
    },
    getExteriorSection: (state) => (id) => {
      return state.customerEstimate.exterior.workSections.find(sec => sec.id === id);
    },
    getExteriorSections(state) {
      return state.customerEstimate.exterior.workSections;
    },

    // Interior Getters
    getInteriorHasCustomTotal(state) {
      return state.customerEstimate.interior.hasCustomTotal;
    },
    getInteriorTotal(state) {
      return state.customerEstimate.interior.total;
    },
    getInteriorSection: (state) => (id) => {
      return state.customerEstimate.interior.workSections.find(sec => sec.id === id);
    },
    getInteriorSections(state) {
      return state.customerEstimate.interior.workSections;
    },
    
    // Customer Personal Information Getters
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
    },

    // Sections Getters
    getIsCustomWorkActive(state) {
      return state.sectionActiveBool.isCustomWorkActive;
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

    // Work Options Getters
    getHasCustomWork(state) {
      return state.workOptions.hasCustomWork;
    },
    getHasExterior(state) {
      return state.workOptions.hasExterior;
    },
    getHasInterior(state) {
      return state.workOptions.hasInterior;
    },
  },
  mutations: {
    // Custom Work Mutations
    addCustomWorkSection(state) {
      var id = uuid.v4();
      var newWorkSection = {
        id: id,
        description: "",
        title: "",
      }
      state.customerEstimate.customWork.workSections.push(newWorkSection);
    },
    deleteCustomWorkSection(state, {id}) {
      state.customerEstimate.customWork.workSections = state.customerEstimate.customWork.workSections.filter(section => section.id != id);
    },
    setCustomWorkHasCustomTotal(state, val) {
      state.customerEstimate.customWork.hasCustomTotal = val;
    },
    setCustomWorkSectionDescription(state, {id, description}) {
      state.customerEstimate.customWork.workSections.find(section => section.id === id).description = description;
    },
    setCustomWorkSectionTitle(state, {id, title}) {
      state.customerEstimate.customWork.workSections.find(section => section.id === id).title = title;
    },
    setCustomWorkTotal(state, val) {
      state.customerEstimate.customWork.total = val;
    },

    // Exterior Mutations
    addExteriorSection(state) {
      var id = uuid.v4();
      var newWorkSection = {
        id: id,
        description: "",
        title: "",
      }
      state.customerEstimate.exterior.workSections.push(newWorkSection);
    },
    deleteExteriorSection(state, {id}) {
      state.customerEstimate.exterior.workSections = state.customerEstimate.exterior.workSections.filter(section => section.id != id);
    },
    setExteriorHasCustomTotal(state, val) {
      state.customerEstimate.exterior.hasCustomTotal = val;
    },
    setExteriorSectionDescription(state, {id, description}) {
      state.customerEstimate.exterior.workSections.find(section => section.id === id).description = description;
    },
    setExteriorSectionTitle(state, {id, title}) {
      state.customerEstimate.exterior.workSections.find(section => section.id === id).title = title;
    },
    setExteriorTotal(state, val) {
      state.customerEstimate.exterior.total = val;
    },

    // Interior Mutations
    addInteriorSection(state) {
      var id = uuid.v4();
      var newWorkSection = {
        id: id,
        description: "",
        title: "",
      }
      state.customerEstimate.interior.workSections.push(newWorkSection);
    },
    deleteInteriorSection(state, {id}) {
      state.customerEstimate.interior.workSections = state.customerEstimate.interior.workSections.filter(section => section.id != id);
    },
    setInteriorHasCustomTotal(state, val) {
      state.customerEstimate.interior.hasCustomTotal = val;
    },
    setInteriorSectionDescription(state, {id, description}) {
      state.customerEstimate.interior.workSections.find(section => section.id === id).description = description;
    },
    setInteriorSectionTitle(state, {id, title}) {
      state.customerEstimate.interior.workSections.find(section => section.id === id).title = title;
    },
    setInteriorTotal(state, val) {
      state.customerEstimate.interior.total = val;
    },

    // Customer Personal Information Setters
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

    // Sections Setters
    toggleAllSectionsOff(state) {
      state.sectionActiveBool.isCustomWorkActive = false;
      state.sectionActiveBool.isExteriorActive = false;
      state.sectionActiveBool.isInteriorActive = false;
      state.sectionActiveBool.isPaymentActive = false;
      state.sectionActiveBool.isPersonalInformationActive = false;
      state.sectionActiveBool.isWorkOptionsActive = false;
    },
    toggleIsCustomWorkActiveOn(state) {
      state.sectionActiveBool.isCustomWorkActive = true;
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

    // Work Options Setters
    setHasCustomWork(state, val) {
      state.workOptions.hasCustomWork = val;
    },
    setHasExterior(state, val) {
      state.workOptions.hasExterior = val;
    },
    setHasInterior(state, val) {
      state.workOptions.hasInterior = val;
    },
  },
  actions: {
    // Work Section Actions
    addWorkTotal({commit}, {workType}) {
      if (workType === "customWork") {
        commit('setCustomWorkHasCustomTotal', true);
      }
      else if (workType === "exterior") {
        commit('setExteriorHasCustomTotal', true);
      }
      else if (workType === "interior") {
        commit('setInteriorHasCustomTotal', true);
      }
    },
    deleteWorkSection({commit, getters}, {workType, id}) {
      if (workType === "customWork") {
        commit('deleteCustomWorkSection', {id});
        if (getters.getCustomWorkSections.length === 0) {
          commit('addCustomWorkSection');
        }
      }
      else if (workType === "exterior") {
        commit('deleteExteriorSection', {id});
        if (getters.getExteriorSections.length === 0) {
          commit('addExteriorSection');
        }
      }
      else if (workType === "interior") {
        commit('deleteInteriorSection', {id});
        if (getters.getInteriorSections.length === 0) {
          commit('addInteriorSection');
        }
      }
    },
    deleteWorkTotal({commit}, {workType}) {
      if (workType === "customWork") {
        commit('setCustomWorkHasCustomTotal', false);
      }
      else if (workType === "exterior") {
        commit('setExteriorHasCustomTotal', false);
      }
      else if (workType === "interior") {
        commit('setInteriorHasCustomTotal', false);
      }
    },
    setWorkSectionDescription({commit}, {workType, id, description}) {
      if (workType === "customWork") {
        commit('setCustomWorkSectionDescription', {id, description});
      }
      else if (workType === "exterior") {
        commit('setExteriorSectionDescription', {id, description});
      }
      else if (workType === "interior") {
        commit('setInteriorSectionDescription', {id, description});
      }
    },
    setWorkSectionTitle({commit}, {workType, id, title}) {
      if (workType === "customWork") {
        commit('setCustomWorkSectionTitle', {id, title});
      }
      else if (workType === "exterior") {
        commit('setExteriorSectionTitle', {id, title});
      }
      else if (workType === "interior") {
        commit('setInteriorSectionTitle', {id, title});
      }
    },
    setWorkTotal({commit}, {workType, total}) {
      if (workType === "customWork") {
        commit('setCustomWorkTotal', total);
      }
      else if (workType === "exterior") {
        commit('setExteriorTotal', total);
      }
      else if (workType === "interior") {
        commit('setInteriorTotal', total);
      }
    },
    
    toggleIsCustomWorkActiveOn({commit}) {
      commit('toggleAllSectionsOff');
      commit('toggleIsCustomWorkActiveOn');
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
