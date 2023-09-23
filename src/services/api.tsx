import axios from "axios";
const api = axios.create({
  // baseURL: "http://localhost:27017",
  baseURL:"https://e-commerce-backend-xh0l.onrender.com",
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  }
});
export default api;
