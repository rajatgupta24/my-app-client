import axios, { AxiosInstance } from "axios";

const ApiUtil: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  headers: { "X-Custom-Header": "foobar" },
});

export default ApiUtil;
