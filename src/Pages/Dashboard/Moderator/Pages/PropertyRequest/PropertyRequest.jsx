import toast from 'react-hot-toast';
import useAxios from '../../../../../Hooks/useAxios';
import usePropertyReqForMod from '../../../../../Hooks/usePropertyReqForMod';
import { MdManageHistory } from 'react-icons/md';
import Swal from 'sweetalert2';
import PageTitle from '../../../../../Features/PageTitle/PageTitle';
import useTheme from '../../../../../Providers/ThemeContext';

const PropertyRequest = () => {
  const instance = useAxios();
  const [propertyReqForMod, isLoading, refetch] = usePropertyReqForMod();
  const {themeMode} = useTheme();

  const handleAccepted = async _id => {
    const res = await instance.put(`/buyer-inquiries/status-accept/${_id}`);
    if (res?.data?.status === 'success') {
      refetch();
      toast.success('Buyer request has been accepted');
    } else
      error => {
        toast.error(error.message);
      };
  };

  const handleRejected = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#076aa5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, reject it!',
      width: '350px',
    }).then(result => {
      if (result.isConfirmed) {
        instance.put(`buyer-inquiries/status-reject/${id}`).then(res => {
          refetch();
          if (res?.data?.status === 'success') {
            toast.success(`This property has been rejected`);
          }
        });
      }
    });
  };
  return (
    <div className="min-h-[calc(100vh-68px)]">
      <PageTitle title="Property Hunter || Property Request"></PageTitle>
      {manageProperty && manageProperty.length > 0 ? (
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
              </tr>
            </thead>
            <tbody className="whitespace-nowrap">
              {manageProperty.map(item => (
                <tr key={item._id} className="even:bg-blue-50">
                  <td className="pl-6 w-8"></td>
                  <td className="px-0 py-4 text-sm">
                    <div className="flex items-center cursor-pointer">
                      <img
                        src={item?.buyer_property_images || ''}
                        alt={item.name || ''}
                        className="w-16 h-16 rounded-md shrink-0"
                      />
                      <div className="ml-2">
                        <p className="text-sm text-black">{item?.name || ''}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    $ {item?.annual_income || ''}
                  </td>
                  <td className="px-6 py-4 text-sm">$ {item?.savings || ''}</td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      onClick={() => {
                        if (
                          item?.status !== 'accepted' &&
                          item?.status !== 'rejected'
                        ) {
                          handleAccepted(item._id);
                        }
                      }}
                      style={{
                        backgroundColor:
                          item?.status === 'pending'
                            ? '#076aa5'
                            : item?.status === 'accepted'
                            ? 'gray'
                            : item?.status === 'rejected'
                            ? 'red'
                            : '',
                        padding: '8px',
                        borderRadius: '0.50rem',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        opacity:
                          item?.status === 'accepted' ||
                          item?.status === 'rejected'
                            ? 0.6
                            : 1,
                        pointerEvents:
                          item?.status === 'accepted' ||
                          item?.status === 'rejected'
                            ? 'none'
                            : 'auto',
                      }}
                    >
                      {item?.status || ''}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      style={{
                        backgroundColor:
                          item?.status === 'pending'
                            ? 'red'
                            : item?.status === 'accepted'
                            ? 'gray'
                            : item?.status === 'rejected'
                            ? 'gray'
                            : '',
                        padding: '8px',
                        borderRadius: '0.50rem',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        opacity:
                          item?.status === 'accepted' ||
                          item?.status === 'rejected'
                            ? 0.6
                            : 1,
                        pointerEvents:
                          item?.status === 'accepted' ||
                          item?.status === 'rejected'
                            ? 'none'
                            : 'auto',
                      }}
                      onClick={() => {
                        if (
                          item?.status !== 'accepted' &&
                          item?.status !== 'rejected'
                        ) {
                          handleRejected(item._id);
                        }
                      }}
                    >
                      Reject
                    </span>
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
};

export default PropertyRequest;
