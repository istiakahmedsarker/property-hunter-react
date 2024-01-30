import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const goTo = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Logged in successful");
        goTo("/");
      })
      .catch(() => {
        toast.error("Login unsuccessful");
      });
  };
  return (
    <div
      onClick={handleGoogleLogin}
      className="w-1/2 border py-3 rounded-md cursor-pointer hover:bg-[#eb6753] hover:text-white transition-all duration-300 flex justify-center items-center gap-2"
    >
      <FaGoogle className="text-2xl " />
      Google
    </div>
  );
};

export default GoogleLogin;
