import { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import PageTitle from '../../Features/PageTitle/PageTitle';
const Profile = () => {
  const axios = useAxios();
  const userAuth = useAuth();
  const [user, setUser] = useState({});
  const [update, setUpdate] = useState(false);
  const [uploadImage, setUploadImage] = useState(null);
  console.log('out of function', uploadImage);
  useEffect(() => {
    axios.get(`/users/email/${userAuth?.user?.email}`).then(res => {
      setUser(res?.data);
    });
  }, [axios, userAuth?.user?.email]);
  const handleImage = e => {
    if (e.target.files && e.target.files[0]) {
      setUploadImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleUpdate = e => {
    e.preventDefault();
    const image = e.target.image.files[0];
    toast.success('database not connected');
    setUpdate(false);
    setUploadImage('');
  };
  return (
    <div className=" text-center h-[calc(100vh-322px)]  pb-20 dark:bg-primary-dark">
      <PageTitle title="Property Hunter || Profile"></PageTitle>
      <div
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwopkbaby/image/upload/v1708699566/property_hunter/ccnmixal4csgzoafoa5q.webp')",
          height: '250px',
          width: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <form onSubmit={handleUpdate}>
        <div className="max-w-xl mx-auto gap-4  py-4 px-3 -mt-20 relative">
          {uploadImage && update ? (
            <img
              className="h-24 w-24 mx-auto rounded-full border border-primary-light mb-4"
              src={uploadImage}
              alt="uploaded image"
            />
          ) : (
            <img
              className="h-24 w-24 mx-auto rounded-full border border-primary-light mb-4"
              src={
                user?.data?.user?.image
                  ? user?.data?.user?.image
                  : 'https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg'
              }
              alt="profile image"
            />
          )}

          {update && (
            <div className="group absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 -mt-20">
              <div className="h-24 w-24 mx-auto  cursor-pointer relative">
                <div
                  style={{
                    backgroundImage: 'url(./profile-camera.png)',
                  }}
                  className="h-12 w-12 bg-center bg-cover absolute top-5 left-6 group-hover:hidden"
                ></div>
                <input
                  onBlur={handleImage}
                  type="file"
                  name="image"
                  className="file:bg-transparent file:text-transparent  file:border-none file:rounded-md mb-4 dark:text-white text-primary-light cursor-pointer file:cursor-pointer text-transparent h-24 w-24 mx-auto rounded-full "
                  title="upload image"
                ></input>
              </div>
            </div>
          )}
          <div>
            {update ? (
              <input
                type="text"
                name="name"
                defaultValue={user?.data?.user?.name}
                className="font-semibold text-xl text-primary-light py-1 px-2 border border-primary-light rounded-md outline-none text-center w-64 bg-transparent"
              />
            ) : (
              <h3 className="font-semibold text-xl text-primary-light">
                {user?.data?.user?.name ? user?.data?.user?.name : 'Not loaded'}
              </h3>
            )}

            <p className="text-gray-500">{user?.data?.user?.role}</p>
            <p className="dark:text-slate-400">{user?.data?.user?.email}</p>
          </div>
          {update ? (
            <div className="space-x-3">
              <input
                type="submit"
                value="Update"
                className="bg-primary-light text-white py-2 px-4 rounded-md mt-4 cursor-pointer hover:opacity-90"
              />
              <button
                onClick={() => {
                  setUpdate(false), setUploadImage('');
                }}
                className="bg-red-700 text-white py-2 px-4 rounded-md mt-4 cursor-pointer hover:opacity-90"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setUpdate(true)}
              className="bg-primary-light text-white py-2 px-4 rounded-md mt-4 cursor-pointer hover:opacity-90"
            >
              Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;
