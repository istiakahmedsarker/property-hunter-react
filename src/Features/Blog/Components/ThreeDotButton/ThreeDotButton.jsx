import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi';
import useAuth from '../../../../Hooks/useAuth';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';

const ThreeDotButton = ({ comment, setIsEditable, setShowModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    user: { email },
    userRole,
  } = useAuth();

  return (
    <>
      <div className="flex flex-col items-center absolute right-0 top-3 md:top-7">
        {email === comment.authorEmail || userRole ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" p-2 rounded-full hover:dark:dark:bg-card-dark  hover:bg-slate-200 cursor-pointer focus:dark:dark:bg-card-dark focus:bg-slate-200"
          >
            <BsThreeDotsVertical size={18} />
          </button>
        ) : (
          ''
        )}

        {isOpen && (
          <div className=" absolute right-0 top-12 rounded-sm dark:bg-card-dark bg-slate-200">
            <div className="flex flex-col">
              {email === comment.authorEmail ? (
                <div className="tooltip tooltip-left" data-tip="Edit">
                  <button
                    onClick={() => setIsEditable(true)}
                    className=" p-2 rounded-full cursor-pointer"
                  >
                    <FiEdit size={18} />
                  </button>
                </div>
              ) : (
                ''
              )}

              {email === comment.authorEmail || userRole ? (
                <div className="tooltip tooltip-left" data-tip="Delete">
                  <button
                    onClick={() => setShowModal(true)}
                    className=" p-2 rounded-full cursor-pointer"
                  >
                    <FaRegTrashCan size={18} />
                  </button>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ThreeDotButton;
