import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend86400.herokuapp.com",
});

export default instance;
