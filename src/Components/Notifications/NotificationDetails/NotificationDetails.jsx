import { IoNotificationsSharp } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";

const NotificationDetails = () => {
  const notification = useLoaderData();
 const notice = notification?.data?.announcement;

 console.log(notification);

  return (
    <div className="min-h-[calc(100vh-68px)] flex justify-center mt-[8%] mx-auto">
      <div className=" py-4 px-6 rounded-md w-[50%] dark:bg-card-dark h-fit">
        <div className="flex justify-between mb-3 font-bold">
          <span className="bg-primary-light h-9 w-9 rounded-full text-white flex justify-center items-center ">
          <IoNotificationsSharp className="text-2xl" />
          </span>{" "}
          <span className="dark:text-white">Date: {notice?.post_date}</span>
        </div>
        <h3 className="text-2xl font-semibold mb-3 dark:text-white">{notice?.heading}</h3>
        <p className="text-gray-600 text-lg dark:text-secondary-light">
          {notice?.notice_details}
        </p>
      </div>
    </div>
  );
};

export default NotificationDetails;
