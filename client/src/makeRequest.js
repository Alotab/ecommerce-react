import axios from "axios";


export const makeRequest = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
  headers: {
    Authorization: "bearer " + import.meta.env.REACT_APP_API_TOKEN,
  },
});