import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import useAuth from './useAuth';

const instance = axios.create({
  // baseURL: 'http://localhost:7000/api/v1',
  // baseURL: 'http://localhost:3000/api/v1',
  // baseURL: 'https://property-hunter-server-roan.vercel.app/api/v1',
  // baseURL: 'https://property-hunter-server-roan.vercel.app/api/v1/',
  baseURL: 'https://property-hunter-server.vercel.app/api/v1',
});

const useAxiosSecure = () => {
  // const { logOut } = useAuth();
  // const navigate = useNavigate();

  instance.interceptors.request.use(
    function(config) {
      // Do something before request is sent

      config.withCredentials = true;
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      // console.log({ response });
      return response;
    },
    (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        // logOut();
        // navigate('/login');
      }
      console.log('error', error.response.data.message);
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosSecure;
