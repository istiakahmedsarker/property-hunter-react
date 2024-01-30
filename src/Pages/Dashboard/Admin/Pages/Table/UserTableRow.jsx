import React from 'react';

const UserTableRow = ({ user, index }) => {
  console.log(user);
  const { _id, name } = user || {};
  return (
    <tr className={`${index % 2 === 4 ? 'bg-[#fff7f5]' : ''}`}>
      <th className="text-xs md:text-xs lg:text-sm">
        <label>{index + 1}</label>
      </th>
      <td>
        <h3 className="text-xs md:text-xs lg:text-sm">{name}</h3>
      </td>
      <td>
        <h3 className="text-xs md:text-xs lg:text-sm">Role</h3>
      </td>

      <th className="flex text-xs md:text-xs lg:text-sm items-center justify-center gap-2">
        <button className="px-5 py-3 hover:text-white rounded-md hover:bg-[#9ec281]">
          Make Admin
        </button>
      </th>
    </tr>
  );
};

export default UserTableRow;
