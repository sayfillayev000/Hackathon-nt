import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  singIn: false,
};

export const sessionSlice = createSlice({
  name: "auth/session",
  initialState,
  reducers: {
    setSignInSuccess :(state, action) =>{
      state.signedIn = true;
      state.token = action.payload;
    },
    setSignOutSuccess:(state, action) =>{
      state.signedIn = false;
      state.token = "";
    },
  },
});

export const { setSignOutSuccess } = sessionSlice.actions;
export default sessionSlice.reducer;
