import useFavorite from "../../Hooks/useFavorite";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import { AiFillDelete } from "react-icons/ai";

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
        instance
          .delete(`/property-favorite/delete/${id}`)
          .then((res) => {
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
    <div className="flex flex-col mx-auto">
      <div className="flex justify-evenly">
        <h2 className="text-3xl">Favorite Items: {favorite?.data?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table mb-4">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Property Name</th>
              <th>Location</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {favorite && Array.isArray(favorite?.data) ? (
              favorite.data.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <div className="flex items-center gap-3">
                    <td>
                      <div className="avatar">
                        <div className="mask mask-half-2 w-12 h-12">
                          <img
                            src={item?.property_images || ""}
                            alt={item.property_title || ""}
                          />
                        </div>
                      </div>
                    </td>
                    <div className="font-semibold">
                          {item?.property_title || ""}
                          </div>
                  </div>
                  <td>{item?.property_location || ""}</td>
                  <td>${item?.price || ""}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <AiFillDelete className="text-red-500" />
                    </button>
                  </th>
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
