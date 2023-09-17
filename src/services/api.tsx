import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:27017",
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  }
});
export default api;