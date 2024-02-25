import useFavorite from "../../Hooks/useFavorite";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import { MdOutlineDeleteForever } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import { FaRegHeart } from "react-icons/fa6";
import './favoriteStyle.css';
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const FavoriteProperty = () => {
  const [favorite, refetch] = useFavorite();
  const instance = useAxios();
  const { user } = useAuth();
  const handleDelete = (id, propertyId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      iconColor: '#ff0000',
      showCancelButton: true,
      confirmButtonColor: "#076aa5",
      cancelButtonColor: "#FF0000",
      confirmButtonText: "Yes, delete it!",
      width: "350px",
    }).then((result) => {
      if (result.isConfirmed) {
        instance.delete(`/property-favorite/delete/${id}`).then((res) => {
          if (res?.data?.status === "success") {
            instance
              .post("/property-favorite/favorite-user-remove", {
                property_id: propertyId,
                user_email: user?.email,
              })
              .then((res) => {
                if (res?.data?.status === "success") {
                  toast.success('Favorite property delete successfully!');
                  refetch();
                }
              });
          }
        });
      }
    });
  };

  return (
    <div className="min-h-[calc(100vh-68px)]">
      {
        favorite?.data?.length > 0 ? <div className="overflow-x-auto">
        <table className="min-w-full bg-white font-[sans-serif]">
          {/* head */}
          <thead className="bg-gray-700 whitespace-nowrap">
            <tr>
              <th className="pl-6 w-8">
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white"></th>
              <th className="px-0 py-3 text-left text-sm font-semibold text-white">
                Property Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Location
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap">
            {favorite && Array.isArray(favorite?.data) ? (
              favorite.data.map((item) => (
                <tr key={item._id} className="even:bg-blue-50">
                  <td className="pl-6 w-8">
                  </td>
                  <td className="px-6 py-4 text-sm"></td>
                  <td className="px-0 py-4 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <img
                        src={item?.property_images || ""}
                        alt={item.property_title || ""}
                        className="w-16 h-16 rounded-md shrink-0"
                      />
                      <div className="ml-2">
                        <p className="text-sm text-black">
                          {item?.property_title || ""}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {item?.property_location || ""}
                  </td>
                  <td className="px-6 py-4 text-sm">$ {item?.price || ""}</td>
                  <td className="px-6 py-4 text-2xl">
                    <MdOutlineDeleteForever
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDelete(item._id, item.property_id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No favorite items available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      :
      <div className="flex flex-col justify-center items-center mt-10">
        <div >
          <h3 >
          <FaRegHeart  className="w-72 h-72 text-primary-light opacity-40 animate-swing"/>
          </h3>
        </div>
        <div className="">
        <h3 className="text-wrap text-lg dark:text-white">You have not added any favorite item</h3>
        </div>
        <div className="mt-10">
          <Link to="/properties">
          <button className="btn btn-sm btn-outline border-primary-light hover:bg-primary-light">Add Favorite</button>
          </Link>
        </div>
      </div>
      }
    </div>
  );
};

export default FavoriteProperty;
