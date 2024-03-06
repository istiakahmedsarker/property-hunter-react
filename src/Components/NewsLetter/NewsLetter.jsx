import toast from 'react-hot-toast';
import useAxios from '../../Hooks/useAxios';
import { useState } from 'react';

const NewsLetter = () => {
  const [errMessage, setErrMessage] = useState('');
  const use_axios = useAxios();
  const handleNewsLetter = (e) => {
    e.preventDefault();
    // get time & date
    function pad(n) {
      return n < 10 ? '0' + n : n;
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
    if (subscribed_email == '') {
      return setErrMessage('Email is required');
    } else {
      setErrMessage('');
    }
    const subscriberInfo = {
      subscribed_email,
      subscribed_date,
      subscribed_time,
      time_stamp: time_stamp.getTime(),
    };
    // console.log(subscriberInfo);
    use_axios
      .post('/subscriber/add-subscriber', subscriberInfo)
      .then((res) => {
        if (res?.data?.status === 'success') {
          toast.success('Thanks for subscribing us!');
          e.target.reset();
        } else if (res?.data?.status === 'failed') {
          toast.error('Already Subscribed by this email');
        }
      })
      .catch(() => {
        toast.error('Server Error');
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/simple-little-house-model-one-story-village-building-3d-rendering_187882-1562.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
      }}
    >
      <div className=" px-4 xs:px-10 xl:px-0 py-14 sm:py-20  max-w-7xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-semibold max-w-96 sm:leading-10">
          Subscribe our news letter for get our exiting offer!
        </h3>
        <form onSubmit={handleNewsLetter} className="flex item-center mt-5 ">
          <div className="relative">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className=" py-2 md:py-3 px-5 rounded-l-md border-2 border-white  text-primary-light w-full outline-none font-semibold rounded-r-none"
              required
            />
            {errMessage && (
              <p className="absolute -bottom-10 text-white bg-red-600 py-1 rounded-md px-3">
                {errMessage}
              </p>
            )}
          </div>
          <button
            type="submit"
            className=" border-2 border-white border-l-2 hover:border-l-primary-light py-2 md:py-3 px-3 md:px-5 rounded-r-md rounded-l-none bg-primary-light hover:bg-white  transition-all font-semibold hover:text-primary-light  "
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
