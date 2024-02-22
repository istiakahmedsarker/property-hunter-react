import { IoNotificationsSharp } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";

const NotificationDetails = () => {
  const notification = useLoaderData();
 const notice = notification?.data?.announcement;

  return (
    <div className="h-[80vh] flex justify-center items-center mx-auto">
      <div className="bg-orange-50 py-3 px-4 rounded-md w-[50%] ">
        <div className="flex justify-between mb-3 font-bold">
          <span className="bg-[#eb6753] h-9 w-9 rounded-full text-white flex justify-center items-center ">
          <IoNotificationsSharp className="text-2xl" />
          </span>{" "}
          <span>Date: {notice?.post_date}</span>
        </div>
        <h3 className="text-2xl font-semibold mb-3">{notice?.heading}</h3>
        <p className="text-gray-600 text-lg">
          {notice?.notice_details}
        </p>
      </div>
    </div>
  );
};

export default NotificationDetails;
