const Profile = () => {
  return (
    <div className="mt-20">
      <h2 className="mb-7 font-semibold text-2xl text-[#eb6753]">My Profile</h2>
      <div className="space-y-5">
        <div className=" flex items-center gap-4 border  py-4 px-3">
          <img
            className="h-24 w-h-24 rounded-full border border-[#eb6753]"
            src="https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
            alt="profile image"
          />
          <div>
            <h3 className="font-semibold text-xl">User Name</h3>
            <p className="text-gray-500">User Role</p>
          </div>
        </div>
        <div className="border  py-4 px-3">
          <h2 className="font-semibold text-xl mb-2 text-[#eb6753]">
            Personal Information
          </h2>
          <div className="flex gap-5">
            <div>
              <p>
                <span className="font-semibold">First Name:</span>{" "}
              </p>
              <p>
                <span className="font-semibold">Last Name:</span>{" "}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Email:</span>{" "}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="border  py-4 px-3">
          <h2 className="font-semibold text-xl mb-2 text-[#eb6753]">
            Address:{" "}
          </h2>
          <p>Address.....</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
