import useAxios from "../../../../../Hooks/useAxios";
import usePropertyStatus from "../../../../../Hooks/usePropertyStatus";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

export default function PropertyStatus() {
  const instance = useAxios();
  const [status, refetch] = usePropertyStatus();

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
        instance.delete(`/buyer-inquiries/delete/${id}`).then((res) => {
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
    <div>
    <div className="grid lg:grid-cols-2 gap-8 mx-auto mt-10 mr-4">
      {status ? (
        status.map((item) => (
          <div
            key={item._id}
            className="bg-white grid sm:grid-cols-2 items-center shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 relative"
          >
            <img src={item.buyer_property_images} className="w-full h-full" />
            <div className="px-4 py-6">
            <h3 
            onClick={() => handleDelete(item._id)}
            className="text-xl font-semibold absolute text-[#eb6753] top-4 right-4 cursor-pointer">
                <MdOutlineDeleteForever/>
              </h3>
              <h3 className="text-xl font-semibold">
                {item.buyer_property_title}
              </h3>

              <div className="text-sm font-semibold text-gray-400 flex justify-between mt-2">
                <h4>
                  size{" "}
                  <span className="text-gray-600">
                    : {item.buyer_property_squareFootage}sq Ft
                  </span>
                </h4>
                <h4>
                  price{" "}
                  <span className="text-gray-600">
                    : $ {item.buyer_property_price}
                  </span>
                </h4>
                <span></span>
              </div>
              <div>
                {item?.status === "pending" ? (
                  <p className="mt-2 text-sm text-gray-400">
                    Please wait as your request is pending. The seller can pay
                    only after accepting the request.
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-green-400">
                    Your request has been accepted, you can make the payment.
                  </p>
                )}
              </div>
              <div className="flex justify-end mt-4 flex-wrap">
                <Link to={`/dashboard/payment/${item._id}`}>
                <button
                disabled={item?.status === "pending"}
                  type="button"
                  className="btn-sm rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#eb6753] hover:bg-gray-400 active:bg-[#eb6753] disabled:bg-gray-300"
                >
                  Check Out
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center items-center">You have not send a request for the property yet</p>
      )}
    </div>
    <div className="flex justify-between mt-10">
      <Link to="/">
        <button type="button"
        className="px-6 py-2 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-[#eb6753] bg-[#eb6753] hover:bg-transparent hover:text-black transition-all duration-300">
          Go to Home
        </button>
        </Link>
        <Link to="/properties">
        <button
        type="button"
        className="px-6 py-2 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-[#eb6753] bg-[#eb6753] hover:bg-transparent hover:text-black transition-all duration-300">
         See Properties
        </button>
        </Link>
      </div>
    </div>
  );
}
