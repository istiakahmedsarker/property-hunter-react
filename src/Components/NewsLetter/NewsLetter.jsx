import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import { useState } from "react";

const NewsLetter = () => {
  const [errMessage, setErrMessage] = useState("");
  const use_axios = useAxios();
  const handleNewsLetter = (e) => {
    e.preventDefault();
    // get time & date
    function pad(n) {
      return n < 10 ? "0" + n : n;
    }
    const time_stamp = new Date();
    const currentTime = time_stamp.toLocaleTimeString();
    const day = time_stamp.getDate();
    const month = time_stamp.getMonth();
    const year = time_stamp.getFullYear();
    const currentDate = `${pad(day)}/${pad(month + 1)}/${year}`;

    const subscribed_time = currentTime;
    const subscribed_date = currentDate;
    const subscribed_email = e.target.email.value;
    if (subscribed_email == "") {
      return setErrMessage("Email is required");
    } else {
      setErrMessage("");
    }
    const subscriberInfo = {
      subscribed_email,
      subscribed_date,
      subscribed_time,
      time_stamp: time_stamp.getTime(),
    };
    console.log(subscriberInfo);
    use_axios
      .post("/subscriber/add-subscriber", subscriberInfo)
      .then((res) => {
        if (res?.data?.status === "success") {
          toast.success("Thanks for subscribing us!");
          e.target.reset();
        } else if (res?.data?.status === "failed") {
          toast.error("Already Subscribed by this email");
        }
      })
      .catch(() => {
        toast.error("Server Error");
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/simple-little-house-model-one-story-village-building-3d-rendering_187882-1562.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "15px",
        color: "white",
      }}
      className="py-10 px-6 md:py-20 md:px-10 max-w-7xl mx-auto"
    >
      <h3 className="text-3xl font-semibold max-w-96 leading-10">
        Subscribe our news letter for get our exiting offer!
      </h3>
      <form onSubmit={handleNewsLetter} className="flex items-center mt-5 ">
        <div className="relative">
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="py-3 px-5  rounded-l-md border-r border-r-primary-light text-primary-light max-w-56 outline-none font-semibold"
          />
          {errMessage && (
            <p className="absolute -bottom-10 text-white bg-red-600 py-1 rounded-md px-3">
              {errMessage}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="border border-none py-3 px-5 rounded-r-md bg-primary-light hover:bg-white hover:border-white transition-all font-semibold hover:text-primary-light"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
