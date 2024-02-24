import { useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const EditCommentField = ({ comment, refetch, setIsEditable }) => {
  const [updateComment, setUpdateComment] = useState('');
  const axios = useAxiosSecure();

  const handleChange = (event) => {
    setUpdateComment(event.target.value);
    // Reset the height to allow textarea to grow and shrink dynamically
    event.target.style.height = 'auto';

    // Set the height based on the content inside
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  //   update comment
  const handleUpdateComment = async () => {
    const res = await axios.patch(`comments/${comment._id}`, {
      commentMsg: updateComment,
    });

    if (res.data.status === 'success') {
      refetch();
      setIsEditable(false);
      toast.success('update comment');
    }
  };
  return (
    <>
      <textarea
        className="md:w-[calc(100%-45px)] w-full min-h-[40px] outline-none px-4 resize-none border border-gray-300 dark:border-stone-700 dark:bg-card-dark rounded-md py-3 "
        placeholder="Write a comment..."
        defaultValue={comment.commentMsg}
        onChange={handleChange}
      />
      <div className="mb-5 flex justify-between">
        <button
          onClick={() => setIsEditable(false)}
          className=" text-sm text-primary-light font-medium"
        >
          Cancel
        </button>
        {updateComment.length > 1 ? (
          <button
            onClick={handleUpdateComment}
            className=" text-sm text-primary-light font-medium"
          >
            Update
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default EditCommentField;
