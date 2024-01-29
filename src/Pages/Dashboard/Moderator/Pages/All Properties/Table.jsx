import React from 'react';
import TableRow from './TableRow';

const Table = ({properties = []}) => {

    return (
        <div className="overflow-x-auto bg-white w-full px-0 py-4">
        <table className="table">
          {/* head */}
          <thead className='bg-gray-50 '>
          {/* <thead className='bg-[#eb6753] '> */}
            <tr>
              <th>
                <label>
                  
                </label>
              </th>
              <th className='text-xs md:text-md lg:text-lg text-gray-800 font-bold '>Property</th>
              <th className='text-xs md:text-md lg:text-lg text-gray-800 font-bold '>Owner</th>
              <th className='text-xs md:text-md lg:text-lg text-gray-800 font-bold '>Status</th>
              <th className='text-xs md:text-md lg:text-lg text-center text-gray-800 font-bold '>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {
              properties && properties?.map((prop, i) => 
                  <TableRow index={i} properties={prop} key={prop?._id}/>
                  )
            }
           
          </tbody>
         
        </table>
      </div>
    );
};

export default Table;