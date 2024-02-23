import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
const Profile = () => {
  const axios = useAxios();
  const userAuth = useAuth();
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    axios.get(`/users/email/${userAuth?.user?.email}`).then((res) => {
      setUser(res?.data);
    });
  }, [axios, userAuth?.user?.email]);
  return (
    <div className=" text-center h-[calc(100vh-322px)]  pb-20 dark:bg-primary-dark">
      <div
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwopkbaby/image/upload/v1708699566/property_hunter/ccnmixal4csgzoafoa5q.webp')",
          height: "250px",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="max-w-xl mx-auto gap-4  py-4 px-3 -mt-20">
        <img
          className="h-24 w-24 mx-auto rounded-full border border-primary-light mb-4"
          src={
            user?.data?.user?.image
              ? user?.data?.user?.image
              : "https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
          }
          alt="profile image"
        />
        <div>
          <h3 className="font-semibold text-xl text-primary-light">
            {user?.data?.user?.name ? user?.data?.user?.name : "No User Name"}
          </h3>
          <p className="text-gray-500">{user?.data?.user?.role}</p>
          <p className="dark:text-white">{user?.data?.user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
