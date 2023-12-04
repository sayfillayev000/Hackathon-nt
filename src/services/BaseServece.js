import axios from "axios";
import { setSignOutSuccess } from "../store/auth/sessionSlice";
import { appConfig } from "../configs/appConfig";
import { store } from "../store";


const unAuthenticatedCode = ["403"];

const BaseService = axios.create({
  timeout: 10000,
  baseURL: appConfig.apiPrefix,
});

BaseService.interceptors.request.use(
  (config) => {
    const stateData = store.getState();

    if (stateData.session.token !== "") {
      config.headers["Authorization"] =
        `${appConfig.tokenType} ${stateData.session.token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

BaseService.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    if (unAuthenticatedCode.includes(response.status)) {
      return store.dispatch(setSignOutSuccess());
    }

    return Promise.reject(error);
  },
);

export default BaseService;
