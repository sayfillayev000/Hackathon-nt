import BaseService from "./BaseServece";

export const ApiService = {
  fetchData(param) {
    return new Promise((resolve, reject) => {
      BaseService(param)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
