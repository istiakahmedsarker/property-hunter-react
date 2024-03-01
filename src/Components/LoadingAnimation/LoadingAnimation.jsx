import Lottie from "lottie-react";
import loadingAnimation from "./LoadingAnimation.json";

const LoadingAnimation = () => {
  return (
    <div className=" dark:bg-primary-dark bg-[#fff] opacity-90 w-full flex items-center justify-center mx-auto">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default LoadingAnimation;
