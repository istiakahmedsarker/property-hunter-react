import { AiOutlineMail } from 'react-icons/ai';
import { CiLock, CiUser } from 'react-icons/ci';
import { FaGoogle, FaFacebookF, FaRegEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useState } from 'react';
import TermCondition from '../TermCondition/TermCondition';
import axios from 'axios';
import GoogleLogin from '../../Components/GoogleLogin/GoogleLogin';
import useAxios from '../../Hooks/useAxios';

import PageTitle from '../../Features/PageTitle/PageTitle';

const preset_key = 'property-hunter';
const cloud_name = 'dwopkbaby';
const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [termShow, setTermShow] = useState(false);
  const [checked, setChecked] = useState('');
  const toHome = useNavigate();
  const { createUser, updateUserProfile } = useAuth();
  const myAxios = useAxios();

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', preset_key);
    formData.append('folder', 'property-hunter');

    const newUser = {
      fullName: name,
      email,
      password
    };
    axios
      .post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
      .then((res) => {
        if (res.status === 200) {
          const imageURL = res.data?.url;

          // Post user data to your server
          myAxios.post('/users', {
            name,
            email,
            role: 'user',
            image: imageURL || '',
          })
            .then(() => {
              // Create user in authentication system
              createUser(email, password)
                .then(async () => {
                  try {
                    // Post user data again (if needed) after authentication
                    await myAxios.post('/users', {
                      name,
                      email,
                      role: 'user',
                      image: imageURL || '',
                    });

                    // Update user profile (if needed)
                    updateUserProfile(name, imageURL)
                      .then(() => {
                        toast.success('Registration Successful');
                        toHome('/');
                      })
                      .catch(err => {
                        toast.error('Registration Failed!');
                      });
                  } catch (error) {
                    if (error.response.data?.status === 'Fail') {
                      toast.error('This email already exists');
                      return;
                    }
                  }
                })
                .catch(err => {
                  toast.error(err.message);
                });
            })
            .catch(error => {
              if (error.response.data?.status === 'Fail') {
                toast.error('This email already exists');
                return;
              }
            });
        }
      })
      .catch(error => {
        // Handle Cloudinary upload error
        console.error('Cloudinary Upload Error:', error);
      });


    axios.post('https://http://localhost:8000/api/register', newUser, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error during signUp:', error);
      });


  };
  return (
    <>
      {termShow && <TermCondition onClose={setTermShow} />}
      <div className="max-w-4xl flex mx-auto my-10 rounded-lg shadow-sm border bg-white dark:bg-card-dark dark:text-in-dark">
        <PageTitle title="Property Hunter || Registration"></PageTitle>
        <div className="hidden lg:block  bg-[url('/bg-login.jpg')] bg-no-repeat bg-cover bg-center w-1/3 rounded-l-lg"></div>
        <div className="w-full lg:w-2/3 py-8 px-10">
          <h2 className="font-bold mb-10 text-3xl">Please! Register Here</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="space-y-8">
              <div className="flex flex-col gap-3">
                <label className="font-bold">Name</label>
                <div className="relative">
                  <CiUser className="absolute top-1/2 -translate-y-1/2 left-2 text-xl dark:text-black" />
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full pl-8 bg-white dark:text-black"
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
                    className="file-input file-input-bordered file:bg-primary-light file:text-white w-full bg-white dark:text-black"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold">Email</label>
                <div className="relative">
                  <AiOutlineMail className="absolute top-1/2 -translate-y-1/2 left-2 text-xl dark:text-black" />
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full pl-8 bg-white dark:text-black"
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
              <div className="flex items-center gap-2">
                <input
                  onClick={() => setChecked(!checked)}
                  type="checkbox"
                  className="h-5 w-5 rounded-md accent-primary-light"
                />
                <p
                  onClick={() => setTermShow(true)}
                  className="text-primary-light cursor-pointer font-semibold"
                >
                  Terms and conditions
                </p>
              </div>
              {/* {checked ? (
                <button
                  type="submit"
                  className="btn btn-success text-white bg-primary-light hover:bg-primary-light border-none w-full mt-8 hover:opacity-90"
                >
                  Register
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-success text-white bg-primary-light hover:bg-primary-light border-none w-full mt-8 hover:opacity-90"
                  disabled
                >
                  Register
                </button>
              )} */}
              <button
                type="submit"
                className={`btn btn-success text-white bg-primary-light hover:bg-primary-light border-none w-full mt-8 hover:opacity-90 
  dark:text-gray-300 dark:hover:text-white dark:bg-primary-light dark:hover:bg-[#1299e7] `}
                disabled={checked ? false : true}
              >
                Register
              </button>
            </div>
          </form>
          <div className="text-center mt-6">
            <div className="space-y-6">
              <p>
                Have an account?{' '}
                <Link to={'/login'} className="text-primary-light">
                  Login
                </Link>
              </p>
              <p className="text-gray-500">or login with</p>
            </div>
            <div className="mt-10 flex gap-3">
              <GoogleLogin />
              <div className="w-1/2 border py-3 rounded-md cursor-pointer hover:bg-primary-light hover:text-white transition-all duration-300 flex justify-center items-center gap-2">
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
