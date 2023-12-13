import React from "react";
import api from "../../services";
import { API_ENDPOINTS } from "../../services/ApiEndpoints";
import { useDispatch } from "react-redux";
import { setSignInSuccess } from "../../store/auth/sessionSlice";
import { setUser } from "../../store/auth/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  const singIn = async (values) => {
    try {
      const res = await api.post(API_ENDPOINTS.LOGIN, values);
      dispatch(setSignInSuccess(res.data.tokens.acsess));
      dispatch(
        setUser(
          res.data?.user || {
            firs_name: "user",
            last_name: "last name",
            phone_number: null,
            email: null,
          },
        ),
      );
      return {
        success: true,
        message: "",
      };
    } catch (error) {
      return {
        success: false,
        message: JSON.stringify(error.response.data),
      };
    }
  };
  const singUp = async (value) => {
    try {
      const res = await api.post(API_ENDPOINTS.REGISTER, value);
      dispatch(setSignInSuccess(res.data.tokens.acsess));
      dispatch(setUser(res.data.user));
      return {
        success: true,
        message: "",
      };
    } catch (error) {
      return {
        success: false,
        message: JSON.stringify(error.response.data),
      };
    }
    // console.log("singUp =>", value);
  };
  const singOut = async () => {
    console.log("singOut");
  };

  return { singIn, singOut, singUp };
};

export default useAuth;
