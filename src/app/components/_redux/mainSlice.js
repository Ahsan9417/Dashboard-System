import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // userDetail: null,
  countries: null,
  cities: null,
  provinces: null,
  updateSettingLoader: false,
  updatePasswordLoader: false,
  updateSettingStat: null,
  updatePasswordStat: null,
  user: null
};

export const mainSlice = createSlice({
  name: "main",
  initialState: initialState,
  reducers: {
    userDetailsFetched: (state, action) => {
      state.user = action.payload;
    },
    settingLoader: (state, action) => {
      state.updateSettingLoader = action.payload;
    },
    settingUpdateStatus: (state, action) => {
      state.updateSettingStat = action.payload;
    },
    passwordLoader: (state, action) => {
      state.updatePasswordLoader = action.payload;
    },
    passwordUpdateStatus: (state, action) => {
      state.updatePasswordStat = action.payload;
    },
    countryFetched: (state, action) => {
      state.countries = action.payload;
    },
    citiesFetched: (state, action) => {
      state.cities = action.payload;
    },
    provincesFetched: (state, action) => {
      state.provinces = action.payload;
    },
    clearState: (state, action) => {
      state.countries = null;
      state.cities = null;
      state.provinces = null;
      state.updateSettingLoader = false;
      state.updatePasswordLoader = false;
      state.updateSettingStat = null;
      state.updatePasswordStat = null;
      state.user = null;
    },
  }
});
