import { AiOutlineMail } from 'react-icons/ai';
import { CiLock } from 'react-icons/ci';
import { FaFacebookF, FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useState } from 'react';
import GoogleLogin from '../../Components/GoogleLogin/GoogleLogin';
import PageTitle from '../../Features/PageTitle/PageTitle';
import axios from 'axios';
const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const toHome = useNavigate();
  const { signIn } = useAuth();

  const handleLogin = async e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const logInned = { email, password };
    // console.log(email, password);
    signIn(email, password)
      .then(() => {
        toast.success('Logged in successful');
        toHome('/');
      })
      .catch(() => {
        toast.error('Login Failed!');
      });

    try {
      const response = await axios.post('http://localhost:8000/api/logIn', logInned, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const res = response.data;
      
      localStorage.setItem('user:details', JSON.stringify(res?.user));
      // console.log(res);
    } catch (error) {
      // console.log(error.message || 'An error occurred during login');
    }

  };
  return (
    <div className="max-w-4xl flex mx-auto my-10 rounded-lg shadow-sm border bg-white dark:bg-card-dark dark:text-in-dark">
      <PageTitle title="Property Hunter || Login"></PageTitle>
      <div className="hidden lg:block bg-[url('/bg-login.jpg')] bg-no-repeat bg-cover bg-center w-1/3 rounded-l-lg"></div>
      <div className="w-full lg:w-2/3 py-8 px-10">
        <h2 className="font-bold mb-10 text-3xl">Please! Login Here</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="space-y-8">
            <div className="flex flex-col gap-3">
              <label className="font-bold">Email</label>
              <div className="relative">
                <AiOutlineMail className="absolute top-1/2 -translate-y-1/2 left-2 text-xl dark:text-black" />
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full pl-8 bg-white dark:text-black "
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-bold">Password</label>
              <div className="relative">
                <CiLock className="absolute top-1/2 -translate-y-1/2 left-2 text-xl dark:text-black" />
                <input
                  name="password"
                  type={passShow ? 'text' : 'password'}
                  placeholder="Password"
                  className="input input-bordered w-full pl-8 bg-white dark:text-black"
                  required
                />
                <div
                  onClick={() => setPassShow(!passShow)}
                  className="text-xl text-primary-light absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                >
                  {passShow ? <FaEyeSlash /> : <FaRegEye />}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-3 text-right">
              <a href="#">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn btn-success text-white bg-primary-light hover:bg-[#0c95e5] border-none w-full mt-8 hover:opacity-90"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <div className="space-y-6">
            <p>
              Dont have an account?{' '}
              <Link to={'/register'} className="text-primary-light">
                Register
              </Link>
            </p>
            <p className="text-gray-500">or login with</p>
          </div>
          <div className="mt-10 flex gap-3">
            <GoogleLogin />
            <div className="w-1/2 border py-3 rounded-md cursor-pointer hover:bg-[#076aa5] hover:text-white transition-all duration-300 flex justify-center items-center gap-2">
              <FaFacebookF lassName="text-2xl" />
              Facebook
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
