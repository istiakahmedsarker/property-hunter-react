import { AiOutlineMail } from "react-icons/ai";
import { CiLock, CiUser } from "react-icons/ci";
import { FaGoogle, FaFacebookF, FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import TermCondition from "../TermCondition/TermCondition";
import axios from "axios";

const preset_key = "property-hunter";
const cloud_name = "dwopkbaby";
const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [termShow, setTermShow] = useState(false);
  const [checked, setChecked] = useState("");
  const toHome = useNavigate();
  const { createUser, updateUserProfile } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", preset_key);
    formData.append("folder", "property-hunter");

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
        if (res.status === 200) {
          const imageURL = res.data.url;
          createUser(email, password)
            .then(() => {
              updateUserProfile(name, imageURL)
                .then(() => {
                  toast.success("Registration Successful");
                  toHome("/");
                })
                .catch(() => {
                  toast.error("Registration Failed!");
                });
            })
            .catch((err) => {
              toast.error(err.message);
            });
        }
      });
  };
  return (
    <>
      {termShow && <TermCondition onClose={setTermShow} />}
      <div className="max-w-4xl flex mx-auto my-10 rounded-lg shadow-sm border bg-white">
        <div className="hidden lg:block  bg-[url('/bg-login.jpg')] bg-no-repeat bg-cover bg-center w-1/3 rounded-l-lg"></div>
        <div className="w-full lg:w-2/3 py-8 px-10">
          <h2 className="font-bold mb-10 text-3xl">Please! Register Here</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="space-y-8">
              <div className="flex flex-col gap-3">
                <label className="font-bold">Name</label>
                <div className="relative">
                  <CiUser className="absolute top-1/2 -translate-y-1/2 left-2 text-xl" />
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full pl-8 bg-white"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold">Photo</label>
                <div className="relative">
                  <input
                    name="image"
                    type="file"
                    className="file-input file-input-bordered file:bg-[#eb6753] file:text-white w-full bg-white"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold">Email</label>
                <div className="relative">
                  <AiOutlineMail className="absolute top-1/2 -translate-y-1/2 left-2 text-xl" />
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full pl-8 bg-white"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold">Password</label>
                <div className="relative">
                  <CiLock className="absolute top-1/2 -translate-y-1/2 left-2 text-xl" />
                  <input
                    name="password"
                    type={passShow ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-full pl-8 bg-white"
                    required
                  />
                  <div
                    onClick={() => setPassShow(!passShow)}
                    className="text-xl text-[#eb6753] absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                  >
                    {passShow ? <FaEyeSlash /> : <FaRegEye />}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <input
                  onClick={() => setChecked(!checked)}
                  type="checkbox"
                  className="h-5 w-5 rounded-md accent-[#eb6753]"
                />
                <p
                  onClick={() => setTermShow(true)}
                  className="text-blue-700 cursor-pointer font-semibold"
                >
                  Terms and conditions
                </p>
              </div>
              {checked ? (
                <button
                  type="submit"
                  className="btn btn-success text-white bg-[#eb6753] hover:bg-[#eb6753] border-none w-full mt-8 hover:opacity-90"
                >
                  Register
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-success text-white bg-[#eb6753] hover:bg-[#eb6753] border-none w-full mt-8 hover:opacity-90"
                  disabled
                >
                  Register
                </button>
              )}
            </div>
          </form>
          <div className="text-center mt-6">
            <div className="space-y-6">
              <p>
                Have an account?{" "}
                <Link to={"/login"} className="text-[#eb6753]">
                  Login
                </Link>
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
    </>
  );
};

export default Register;
