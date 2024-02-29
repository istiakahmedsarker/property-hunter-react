import useAxios from "../../../../../Hooks/useAxios";
import useManageProperty from "../../../../../Hooks/useManageProperty";
import Swal from "sweetalert2";
import { MdManageHistory } from "react-icons/md";
import toast from "react-hot-toast";
import useTheme from "../../../../../Providers/ThemeContext";
import { TiDeleteOutline } from "react-icons/ti";

export default function ManagePropertyRequest() {
  const instance = useAxios();
  const [manageProperty, refetch] = useManageProperty();
  const {themeMode} = useTheme();

  const handleAccepted = async (_id) =>{
        const res = await instance.put(`/buyer-inquiries/status-accept/${_id}`);
        if (res?.data?.status === "success") {
          refetch();
          toast.success('Buyer request has been accepted');
        }else(error) =>{
          toast.error(error.message)
        }
  }

  const handleRejected = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#076aa5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject it!",
      width: "350px",
      color: themeMode === "dark" ? '#F4F4F4' : '',
      background: themeMode === "dark" ? '#1b1c1d' : '',
      
    }).then((result) => {
      if (result.isConfirmed) {
        instance.put(`buyer-inquiries/status-reject/${id}`).then((res) => {
          refetch();
          if (res?.data?.status === "success") {
            toast.success(`This property has been rejected`)
          }
        });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#076aa5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width: "350px",
      color: themeMode === "dark" ? '#F4F4F4' : '',
      background: themeMode === "dark" ? '#1b1c1d' : '',
      
    }).then((result) => {
      if (result.isConfirmed) {
        instance.delete(`/buyer-inquiries/delete/${id}`)
        .then((res) => {
          if (res?.data?.status === "success") {
            toast.success(`This property has been deleted`)
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="min-h-[calc(100vh-68px)]">
      {manageProperty?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white font-[sans-serif]">
            {/* head */}
            <thead className="bg-gray-700 whitespace-nowrap">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white"></th>
                <th className="px-0 py-3 text-left text-sm font-semibold text-white">
                  Property & Buyer Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  Annual Income
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  Savings
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  Accept
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white">
                  Reject
                </th>
                <th className="mx-auto px-6 py-3 text-left text-sm font-semibold text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="whitespace-nowrap dark:bg-card-dark dark:text-primary-light">
              {manageProperty?.map((item) => (
                <tr key={item._id} className="even:bg-blue-50">
                  <td className="pl-6 w-8"></td>
                  <td className="px-0 py-4 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <img
                        src={item?.buyer_property_images || ""}
                        alt={item.name || ""}
                        className="w-16 h-16 rounded-md shrink-0"
                      />
                      <div className="ml-2 text-wrap">
                        <p className="text-sm ">{item?.name || ""}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    $ {item?.annual_income || ""}
                  </td>
                  <td className="px-6 py-4 text-sm">$ {item?.savings || ""}</td>
                  <td className="px-6 py-4 text-sm text-wrap"><span style={{
                      backgroundColor:
                        item?.status === "pending"
                          ? "#FFC107"
                          : item?.status === "accepted"
                          ? "#4CAF50"
                          : item?.status === "rejected"
                          ? "#FF5757"
                          : "",
                      padding: "8px",
                      borderRadius: "0.50rem",
                      color: "#FFFFFF",
                      cursor: "pointer",
                    }}>
                    {item?.status || ""}</span></td>
                  <td className="px-6 py-4 text-sm">
                  <span
                     onClick={() => {
                      if (item?.status !== "accepted") {
                        handleAccepted(item._id);
                      }
                    }}
                    style={{
                      backgroundColor:
                        item?.status === "pending"
                          ? "#4CAF50"
                          : item?.status === "accepted"
                          ? "#4CAF50"
                          : item?.status === "rejected"
                          ? "#4CAF50"
                          : "",
                      padding: "8px",
                      borderRadius: "0.50rem",
                      color: "#FFFFFF",
                      cursor: "pointer",
                      opacity: item?.status === "accepted" ? 0.6 : 1,
                      pointerEvents:
                      item?.status === "accepted" ? "disabled" : "auto",
                    }}
                    >
                      Accept
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span 
                    style={{
                      backgroundColor:
                        item?.status === "pending"
                          ? "red"
                          : item?.status === "accepted"
                          ? "red"
                          : item?.status === "rejected"
                          ? "red"
                          : "",
                      padding: "8px",
                      borderRadius: "0.50rem",
                      color: "#FFFFFF",
                      cursor: "pointer",
                      opacity: item?.status === "rejected" ? 0.6 : 1,
                      pointerEvents:
                        item?.status === "rejected" ? "disabled" : "auto",
                    }}
                    onClick={() => {
                      if (item?.status !== "rejected") {
                        handleRejected(item._id);
                      }
                    }}
                    >
                      Reject
                    </span>
                  </td>
                  <td className="px-6 py-4 text-2xl text-[#FF5757] mx-auto">
                      <TiDeleteOutline 
                      onClick={()=>handleDelete(item._id)}
                      className="cursor-pointer"
                      />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-10">
          <div>
            <h3>
              <MdManageHistory className="w-72 h-72 text-primary-light opacity-40 animate-swing" />
            </h3>
          </div>
          <div className="mt-20">
            <h3 className="text-wrap text-lg dark:text-white">
              No property has been requested
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
