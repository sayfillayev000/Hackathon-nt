import axios from "axios";
import { appConfig } from "../configs/appConfig";
import { store } from "../store";
// import { useDispatch, useSelector } from "react-redux";
import { setSingOutSuccess } from "../store/auth/sessionSlice";

// const selector = useSelector((state) => state);

// console.log(selector);

const unAuthenticatedCode = ["403"];
const BaseService = axios.create({
  timeout: 10000,
  baseURL: appConfig.apiPrefix,
});

// const dispatch = useDispatch();
BaseService.interceptors.request.use(
  (config) => {
    const steteData = store.getState();
    if (steteData.session.token !== "") {
      config.headers["Authorization"] =
        `${appConfig.tokenType}${steteData.session.token}`;
    }
    return config;
  },
  (error) => Promese.reject(error),
);

BaseService.interceptors.request.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (unAuthenticatedCode.includes(response.status)) {
      return dispatch(setSingOutSuccess());
    }

    return Promise.reject(error);
  },
);

export default BaseService