import { useRef, useState } from 'react';
import './BlogPost.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const BlogPost = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [value, setValue] = useState('');
  const [blogPost, setBlogPost] = useState({
    heading: '',
    shortDescription: '',
  });
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: [] }],
      [{ color: [] }],
      [{ align: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockqoute'],
      ['link'],
    ],
  };

  const handleOnChangeImage = (e) => {
    const imgFile = e.target.files[0];
    setImage(imgFile);
  };
  const handleImage = () => {
    inputRef.current.click();
  };

  const handleBlog = async (e) => {
    e.preventDefault();
    if (!image) return toast.error('Provide an image');

    const imageFile = { image };

    // toast.loading('Post blog...');

    const imgRes = await toast.promise(
      axios.post(
        'https://api.imgbb.com/1/upload?key=b9e7fd7e7e867150e5dff9ee884e9359',
        imageFile,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      ),
      {
        loading: 'Uploading image...',
        success: 'Image uploaded!',
        error: 'Image upload failed.',
      }
    );

    const imageUrl = imgRes?.data?.data.display_url;
    const postData = {
      ...blogPost,
      description: value,
      images: [imageUrl] || [''],
    };

    const res = await toast.promise(
      axios.post('http://localhost:7000/api/v1/blogs', postData),
      {
        loading: 'Saving blog...',
        success: 'Blog post saved!',
        error: 'Failed to save blog post.',
      }
    );

    if (res?.data?.status === 'success') {
      setBlogPost({
        heading: '',
        shortDescription: '',
      });
      setImage(null);
      setValue('');
    }

    console.log(res);
  };
  return (
    <div className="mt-20 max-w-6xl lg:mx-auto mx-4">
      <form
        onSubmit={handleBlog}
        className=" w-full sm:p-0 px-4 mb-10 md:px-8 "
      >
        <div
          className=" grid grid-cols-12 md:gap-10 justify-start
        "
        >
          <div className="col-span-12 sm:col-start-3 sm:col-end-11 md:col-span-5  extraOutline  bg-white w-full h-full row-span-2  rounded-md">
            <div
              onClick={handleImage}
              className="file_upload  relative rounded-lg"
            >
              {image ? (
                <img
                  className="w-full h-[383px] object-cover"
                  src={URL.createObjectURL(image)}
                  alt=""
                />
              ) : (
                <div className="border-4  border-dashed border-stone-700">
                  <svg
                    className="text-stone-700 w-24   mx-auto my-14"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-center tracking-tight font-semibold text-2xl text-stone-700 mb-12">
                    Choose a Photo
                  </p>
                </div>
              )}
              <div className="input_field flex flex-col w-max mx-auto text-center">
                <input
                  ref={inputRef}
                  onChange={handleOnChangeImage}
                  className="text-sm cursor-pointer w-48 hidden"
                  type="file"
                />
              </div>
            </div>
          </div>
          {/* <p
            dangerouslySetInnerHTML={{ __html: value }}
            className="text-lg mt-4"
          />
          <p>{value}</p> */}

          <div className="col-span-12 sm:col-start-2 sm:col-end-12 md:col-span-7 mt-10 md:mt-0">
            <h2 className="hidden md:flex text-center text-2xl font-semibold uppercase mb-10">
              Write a blog
            </h2>

            <div className="flex flex-col gap-5 ">
              <div className="flex flex-col gap-1.5 ">
                <label className="font-semibold  text-stone-700">Title</label>

                <input
                  className="py-2 px-3 text-lg outline-stone-700 rounded-sm placeholder:text-base  border-2 border-gray-500"
                  type="text"
                  value={blogPost.heading}
                  onChange={(e) =>
                    setBlogPost({ ...blogPost, heading: e.target.value })
                  }
                  // {...register('assetName', { required: true })}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold  text-stone-700">
                  Short Description
                </label>
                <textarea
                  name=""
                  className="py-2 px-3 text-lg outline-stone-700 rounded-sm placeholder:text-base  border-2 border-stone-500 h-[90px]"
                  maxLength={100}
                  type="text"
                  value={blogPost.shortDescription}
                  onChange={(e) =>
                    setBlogPost({
                      ...blogPost,
                      shortDescription: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <div className=" md:col-span-12 col-span-12 sm:col-start-2 sm:col-end-12 mt-10 md:mt-6 ">
            <div className="flex flex-col gap-1.5">
              {' '}
              <label className="font-semibold  text-stone-700">
                Description
              </label>
              <ReactQuill
                theme="snow"
                value={value}
                className="h-[400px] md:h-[500px]"
                onChange={setValue}
                modules={modules}
              />
            </div>

            <button className="mt-24 md:mt-16 bg-[#EB6753] px-4 py-2 font-semibold rounded-sm text-red-50 ">
              Create Blog
            </button>
          </div>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default BlogPost;
