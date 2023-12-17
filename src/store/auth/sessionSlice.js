import { createSlice } from "@reduxjs/toolkit";

const accesTokenBook = localStorage.getItem('accesTokenBook')

const initialState = {
  token: accesTokenBook || '',
  singIn: accesTokenBook ? true: false,
};

export const sessionSlice = createSlice({
  name: "auth/session",
  initialState,
  reducers: {
    setSignInSuccess(state, action) {
      state.singIn = true;
      state.token = action.payload
      localStorage.setItem('accesTokenBook',action.payload)
    },
    setSignOutSuccess(state, action) {
      state.singIn = false;
      state.token = "";
    },
  },
});

export const { setSignInSuccess, setSignOutSuccess } = sessionSlice.actions;
export default sessionSlice.reducer;
