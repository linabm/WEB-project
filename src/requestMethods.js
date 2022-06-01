import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://insappes.herokuapp.com/api"; 

export const publicRequest = axios.create({ 
  baseURL: BASE_URL,
});
