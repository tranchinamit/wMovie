import axios from "axios";
// import firebase from "firebase/app";

const api = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    // const token = await firebase.auth().currentUser?.getIdToken();
    // Do something before request is sent
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;
