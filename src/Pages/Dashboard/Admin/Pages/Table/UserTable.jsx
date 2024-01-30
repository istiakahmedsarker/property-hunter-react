import React from 'react';
import UserTableRow from './UserTableRow';

const UserTable = ({ userCards }) => {
  console.log(userCards);
  return (
    <div>
      <table className="table">
        {/* table heading */}
        <thead className="bg-gray-50 ">
          <tr>
            <th>
              <label></label>
            </th>
            <th className="text-xs md:text-md lg:text-lg text-gray-800 font-bold ">
              User Name
            </th>
            <th className="text-xs md:text-md lg:text-lg text-gray-800 font-bold ">
              User Role
            </th>
            <th className="text-xs md:text-md lg:text-lg text-center text-gray-800 font-bold ">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* table row */}
          {userCards.map((user, i) => (
            <UserTableRow index={i} key={user._id} user={user}></UserTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
