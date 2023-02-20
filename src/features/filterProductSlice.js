import { createAction, createReducer } from "@reduxjs/toolkit/";

const initialState = {
  tireWidth: 0,
  tireHeight: 0,
  tireDiameter: 0,
  tireCompany: 0,
  season: 0,
};

export const setTireWidth = createAction("setTireWidth");
export const setTireHeight = createAction("setTireHeight");
export const setTireDiameter = createAction("setTireDiameter");
export const setTireCompany = createAction("setTireCompany");
export const setSeason = createAction("setSeason");

const filterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setTireWidth, (state, action) => {
      state.tireWidth = action.payload;
    })
    .addCase(setTireHeight, (state, action) => {
      state.tireHeight = action.payload;
    })
    .addCase(setTireDiameter, (state, action) => {
      state.tireDiameter = action.payload;
    })
    .addCase(setTireCompany, (state, action) => {
      state.tireCompany = action.payload;
    })
    .addCase(setSeason, (state, action) => {
      state.season = action.payload;
    });
});
export default filterReducer;