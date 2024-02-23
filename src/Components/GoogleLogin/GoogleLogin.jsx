import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const goTo = useNavigate();
  const axios = useAxios();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        toast.success("Logged in successful");
        const userInfo = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          role: "user",
          image: res?.user?.photoURL || "",
        };
        axios
          .post("/users", userInfo)
          .then((user) => {
            // console.log(user);
          })
          .catch(() => {
            console.log("email exist");
          });
        goTo("/");
      })
      .catch(() => {
        toast.error("Login unsuccessful");
      });
  };
  return (
    <div
      onClick={handleGoogleLogin}
      className="w-1/2 border py-3 rounded-md cursor-pointer hover:bg-[#076aa5] hover:text-white transition-all duration-300 flex justify-center items-center gap-2"
    >
      <FaGoogle className="text-2xl " />
      Google
    </div>
  );
};

export default GoogleLogin;
