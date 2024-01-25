import React from "react";

const TableRow = ({properties, index}) => {

    const {propertyTitle, propertyType, _id, price, propertyImages, ownerInformation, propertyStatus, location} = properties || {};

  return (
    <tr className={`${index % 2 === 4 ? "bg-[#fff7f5]" : ""}`}>
      <th className="text-xs md:text-xs lg:text-sm">
        <label >
           {index + 1}
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={propertyImages[0]}
                alt="Property"
              />
            </div>
          </div>
          <div>
            <div className="text-xs md:text-xs lg:text-md  xl:text-lg font-bold">{propertyTitle}</div>
            <div className="text-xs md:text-xs lg:text-sm opacity-50">{location?.state}</div>
          </div>
        </div>
      </td>
      <td>
      <span className=" text-xs md:text-xs lg:text-md xl:text-lg font-medium"> {ownerInformation?.name}</span>
        <br />
        <span className=" text-xs md:text-xs lg:text-sm">
         Email : {ownerInformation?.email}
         
         
         </span>

         <br />
         <span className="text-xs md:text-xs lg:text-sm">
         Phone : {ownerInformation?.phone}
        </span>
      </td>
      <td className="text-xs md:text-xs lg:text-sm xl:text-lg">pending</td>
      <th className="flex text-xs md:text-xs lg:text-sm items-center justify-center gap-2">
        <button className="px-5 py-3 hover:text-white rounded-md hover:bg-[#9ec281]">Accept</button>
        <button className="px-5 py-3 hover:text-white rounded-md hover:bg-[#f48270]">Reject</button>
      </th>
    </tr>
  );
};

export default TableRow;
