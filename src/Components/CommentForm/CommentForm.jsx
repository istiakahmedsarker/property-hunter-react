import { useState } from 'react';
import { useForm } from 'react-hook-form';
import GiveRating from '../GiveRating/GiveRating';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';

function CommentForm({ id, refetch }) {
  const [starRating, setStarRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const axios = useAxios();
  const user = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log({ ...data, rating: starRating, blogId: id });
    if (!starRating) {
      setErrorMsg(' This field is required');
      return;
    }

    const res = await axios.post('/comments', {
      ...data,
      rating: starRating,
      blogId: id,
      authorImg: user?.user.photoURL,
    });

    if (res?.data.status === 'success') {
      refetch();
      reset();
      setErrorMsg('');
      setStarRating(0);
    }

    console.log('res :', res.data.status);
  };

  return (
    <form className=" pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        Share your thoughts
      </h2>

      <div className="flex sm:flex-row flex-col-reverse items-start gap-8 justify-between mb-6">
        <div className="w-full sm:w-[70%]">
          <label className=" text-gray-800 font-bold">Your Name*</label>
          <input
            {...register('name', { required: true })}
            type="text"
            className=" border-2 border-stone-300 rounded-sm w-full my-0.5 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-inherit"
          />
          {errors.name && (
            <p className="text-red-600  font-semibold text-sm italic">
              This field is required
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 ">
          <label className=" text-gray-800 font-bold ">Rating*</label>
          <GiveRating
            setHover={setHover}
            setStarRating={setStarRating}
            hover={hover}
            starRating={starRating}
          />
          {errorMsg ? (
            <p className="text-red-600  font-semibold text-sm italic">
              This field is required
            </p>
          ) : (
            ''
          )}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-800 font-bold mb-1">
          Your Comment*
        </label>
        <textarea
          {...register('commentMsg', { required: true })}
          rows="5"
          className=" border-2 border-stone-300 rounded-sm w-full my-0.5 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-inherit"
        />
        {errors.comment && (
          <p className="text-red-600 mt-0.5 font-semibold text-sm italic">
            This field is required
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#EB6753] hover:bg-[#e1452d] duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none"
      >
        Submit Comment
      </button>
    </form>
  );
}

export default CommentForm;
