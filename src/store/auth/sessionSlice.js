import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  singIn: false,
};

export const sessionSlice = createSlice({
  name: "auth/session",
  initialState,
  reducers: {
    setSingInSuccess(state, action) {
      (state.singIn = true), (state.token = action.payload);
    },
    setSingOutSuccess(state, action) {
      state.singIn = false,
      state.token = ''
    },
  },
});

export const {setSingInSuccess,setSingOutSuccess} = sessionSlice.actions;
export default sessionSlice.reducer;
