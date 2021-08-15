import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "5dcf9479-c8ea-474c-9022-737a5cf485ef",
  },
});

export default instance;
