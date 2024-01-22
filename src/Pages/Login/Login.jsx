"use client";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("login not successfully");
  };
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex w-[850px] rounded-lg shadow-sm border ">
      <div className="bg-[url('/bg-login.jpg')] bg-no-repeat bg-cover bg-center w-1/3 rounded-l-lg"></div>
      <div className="w-2/3 py-8 px-10">
        <h2 className="font-bold mb-10 text-3xl">Please! Login Here</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="space-y-8">
            <div className="flex flex-col gap-3">
              <label className="font-bold">Email</label>
              <div className="relative">
                <AiOutlineMail className="absolute top-1/2 -translate-y-1/2 left-2 text-xl" />
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full pl-8"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-bold">Password</label>
              <div className="relative">
                <CiLock className="absolute top-1/2 -translate-y-1/2 left-2 text-xl" />
                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered w-full pl-8"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mt-3 text-right">
              <a href="#">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn btn-success text-white bg-[#eb6753] hover:bg-[#eb6753] border-none w-full mt-8 hover:opacity-90"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <div className="space-y-6">
            <p>
              Dont have an account?{" "}
              <a href="#" className="text-[#eb6753]">
                Register
              </a>
            </p>
            <p className="text-gray-500">or login with</p>
          </div>
          <div className="mt-10 flex gap-3">
            <div className="w-1/2 border py-3 rounded-md cursor-pointer hover:bg-[#eb6753] hover:text-white transition-all duration-300 flex justify-center items-center gap-2">
              <FaGoogle className="text-2xl " />
              Google
            </div>
            <div className="w-1/2 border py-3 rounded-md cursor-pointer hover:bg-[#eb6753] hover:text-white transition-all duration-300 flex justify-center items-center gap-2">
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
