import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  fullName: "",
  email: "",
  role: "user",
};

export const userSlice = createSlice({
  name: "auth/user",
  initialState,
  reducers: {
    setUser(state, action){
    state.fullName = `${action.payload.firs_name} ${action.payload.last_name}`;
    state.email = action.payload.email;
    state.phone_number = action.payload.phone_number;
    }
  },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
