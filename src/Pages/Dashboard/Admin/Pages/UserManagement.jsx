import React, { useEffect, useState } from 'react';
import getAllUser from '../../../../../lib/getAllUser';
import UserTable from './Table/UserTable';
import PageTitle from '../../../../Features/PageTitle/PageTitle';
// import { connect } from 'react-redux';
// import { setUser } from '../../../../../lib/action';

const UserManagement = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const allUser = await getAllUser();
      setUser(allUser);
    };
    fetchUser();
  }, [setUser]);
  const userCards = user?.data?.users || [];
  // console.log(userCards);

  return (
    <div>
      <PageTitle title="Property Hunter || User Management"></PageTitle>
      <div className="fade-in-left ml-6 mt-7 px-7 py-7 shadow-lg drop-shadow-lg bg-white">
        <h1 className="text-2xl lg:text-4xl text-black text-left font-medium mb-2">
          Welcome back to Admin Dashboard!
        </h1>
        <p className="text-md lg:text-xl text-gray-600 font-thin">
          Manage all the User
        </p>
      </div>
      <UserTable userCards={userCards}></UserTable>
    </div>
  );
};

export default UserManagement;
// const mapStateToProps = state => ({
//   user: state.user,
// });

// const mapDispatchToProps = {
//   setUser,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
