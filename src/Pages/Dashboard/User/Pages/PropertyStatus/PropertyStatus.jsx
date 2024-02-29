import useAxios from "../../../../../Hooks/useAxios";
import usePropertyStatus from "../../../../../Hooks/usePropertyStatus";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { FaHouseCircleExclamation } from "react-icons/fa6";
import toast from "react-hot-toast";
import useTheme from "../../../../../Providers/ThemeContext";

export default function PropertyStatus() {
  const instance = useAxios();
  const [status, refetch] = usePropertyStatus();
  const {themeMode} = useTheme();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#076aa5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width: '350px',
      color: themeMode === "dark" ? '#F4F4F4' : '',
      background: themeMode === "dark" ? '#1b1c1d' : '',
    }).then((result) => {
      if (result.isConfirmed) {
        instance.delete(`/buyer-inquiries/delete/${id}`).then((res) => {
          refetch();
          if (res?.data?.status === "success") {
            toast.success('Your file has been deleted');
          }
        });
      }
    });
  };
  return (
    <div>
      <div >
        {status.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-8 mx-auto mt-10 mr-4">
            {status.map((item) => (
              <div
                key={item._id}
                className="bg-white dark:bg-card-dark grid sm:grid-cols-2 items-center w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 relative dark:text-in-dark"
              >
                <img
                  src={item.buyer_property_images}
                  className="w-full h-full"
                />
                <div className="px-4 py-6">
                  <h3
                    onClick={() => handleDelete(item._id)}
                    className="text-xl font-semibold absolute text-red-500 top-2 right-4 cursor-pointer"
                  >
                    <MdOutlineDeleteForever />
                  </h3>
                  <h3 className="text-xl font-semibold">
                    {item.buyer_property_title}
                  </h3>

                  <div className="text-sm font-semibold text-gray-400 flex justify-between mt-2">
                    <h4>
                      size{" "}
                      <span className="text-gray-600 dark:text-in-dark">
                        : {item.buyer_property_squareFootage}sq Ft
                      </span>
                    </h4>
                    <h4>
                      price{" "}
                      <span className="text-gray-600 dark:text-in-dark">
                        : $ {item.buyer_property_price}
                      </span>
                    </h4>
                    <span></span>
                  </div>
                  <div>
                    {item?.status === "pending" ? (
                      <p className="mt-2 text-sm text-gray-400">
                        Please wait as your request is pending. The seller can
                        pay only after accepting the request.
                      </p>
                    ) : item?.status === "accepted" ? (
                      <p className="mt-2 text-sm text-green-400">
                        Your request has been accepted, you can make the
                        payment.
                      </p>
                    ) : item?.status === "rejected" ? (
                      <p className="mt-2 text-sm text-red-500">
                        This property is not available, so send request for
                        another property.
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex justify-end mt-4 flex-wrap">
                    <Link to={`/dashboard/payment/${item._id}`}>
                      <button
                        disabled={
                          item?.status === "pending" ||
                          item?.status === "rejected"
                        }
                        type="button"
                        className="btn-sm rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-primary-light hover:bg-gray-400 active:bg-primary-light disabled:bg-gray-300"
                      >
                        Check Out
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mx-auto mt-10">
            <h3>
              <FaHouseCircleExclamation className="w-72 h-72 text-primary-light opacity-40" />
            </h3>
            <h3 className="text-wrap text-lg dark:text-white">
              You have not send a request for the property yet
            </h3>
          </div>
        )}
      </div>
      <div className="flex justify-between mt-10 mx-4">
        <Link to="/">
          <button
            type="button"
            className="px-6 py-2 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-primary-light bg-primary-light hover:bg-transparent hover:text-black transition-all duration-300"
          >
            Go to Home
          </button>
        </Link>
        <Link to="/properties">
          <button
            type="button"
            className="px-6 py-2 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-primary-light bg-primary-light hover:bg-transparent hover:text-black transition-all duration-300"
          >
            See Properties
          </button>
        </Link>
      </div>
    </div>
  );
}
