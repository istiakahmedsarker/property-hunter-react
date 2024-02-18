import useFavorite from "../../Hooks/useFavorite";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import { MdOutlineDeleteForever } from "react-icons/md";


const FavoriteProperty = () => {
  const [favorite, refetch] = useFavorite();
  const instance = useAxios();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        instance.delete(`/property-favorite/delete/${id}`).then((res) => {
          refetch();
          if (res?.data?.status === "success") {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white font-[sans-serif]">
          {/* head */}
          <thead className="bg-gray-700 whitespace-nowrap">
            <tr>
              <th className="pl-6 w-8">
                <input id="checkbox" type="checkbox" className="hidden peer" />
                <label className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full fill-white"
                    viewBox="0 0 520 520"
                  >
                    <path
                      d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                      data-name="7-Check"
                      data-original="#000000"
                    />
                  </svg>
                </label>
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                
              </th>
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
                    <input
                      id="checkbox1"
                      type="checkbox"
                      className="hidden peer"
                    />
                    <label className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full fill-white"
                        viewBox="0 0 520 520"
                      >
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check"
                          data-original="#000000"
                        />
                      </svg>
                    </label>
                  </td>
                  <td className="px-6 py-4 text-sm">
                  </td>
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
                      <MdOutlineDeleteForever className="text-red-500 cursor-pointer" 
                      onClick={() => handleDelete(item._id)}/>
                  
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
    </div>
  );
};

export default FavoriteProperty;
