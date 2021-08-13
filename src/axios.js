import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backendo.herokuapp.com",
});

export default instance;
