import Star from '../Star/Star';
import avatar from '../../../../assets/avatar.webp';
import LikeAndDislike from '../LikeAndDislike/LikeAndDislike';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import EditCommentField from '../EditCommentField/EditCommentField';
import ThreeDotButton from '../ThreeDotButton/ThreeDotButton';

const Comment = ({ comment, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const axios = useAxiosSecure();

  const deleteComment = async () => {
    await axios.delete(`comments/${comment._id}`);
    toast.success('Delete comment');
    refetch();
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start py-4 md:py-8 relative">
      {comment?.authorImg ? (
        <img
          className="w-16 h-16 object-cover rounded-2xl"
          src={comment.authorImg}
          alt="author"
        />
      ) : (
        <img
          className="w-16 h-16 object-cover rounded-2xl"
          src={avatar}
          alt="author"
        />
      )}

      <div className="w-full">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h5 className="text-lg font-bold text-primary-dark dark:text-stone-300  mb-1">
              {comment.name}
            </h5>
            <Star rating={comment.rating} />
          </div>
        </div>

        {/* conditional input field for update comment */}
        {isEditable ? (
          <EditCommentField
            comment={comment}
            refetch={refetch}
            setIsEditable={setIsEditable}
          />
        ) : (
          <p className="mb-4 md:w-[calc(100%-45px)]">{comment.commentMsg}</p>
        )}

        {/* Handeling like and dislike */}
        <LikeAndDislike comment={comment} refetch={refetch} />
      </div>

      {/* button for edit and delete comment */}
      <ThreeDotButton
        comment={comment}
        setIsEditable={setIsEditable}
        setShowModal={setShowModal}
      />

      {/*  */}
      {showModal ? (
        <Modal setShowModal={setShowModal} deleteComment={deleteComment} />
      ) : null}
    </div>
  );
};

export default Comment;
