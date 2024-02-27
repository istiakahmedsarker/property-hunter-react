import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://localhost:7000/api/v1',
  // baseURL: 'http://localhost:3000/api/v1',
  // baseURL: "https://property-hunter-server-roan.vercel.app/api/v1/",
  baseURL: 'https://property-hunter-server.vercel.app/api/v1',
});

const useAxios = () => {
  return instance;
};

export default useAxios;
