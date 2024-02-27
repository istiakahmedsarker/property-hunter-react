import { useRef, useState } from 'react';
import './BlogPost.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';
import { useForm, Controller } from 'react-hook-form';
import 'froala-editor/js/plugins.pkgd.min.js';
import useAuth from '../../Hooks/useAuth';

const BlogPost = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const { userId } = useAuth();

  const handleOnChangeImage = (e) => {
    const imgFile = e.target.files[0];
    setImage(imgFile);
  };
  const handleImage = () => {
    inputRef.current.click();
  };

  const options = {
    placeholderText: 'Write your blog post here....',
    quickInsertEnabled: false,
    toolbarButtons: {
      moreText: {
        buttons: [
          'bold',
          'italic',
          'underline',
          'fontSize',
          'strikeThrough',
          'textColor',
          'backgroundColor',
          'subscript',
          'superscript',
        ],
        align: 'left',

        buttonsVisible: 0,
      },
      moreParagraph: {
        buttons: [
          'alignRight',
          'alignLeft',
          'alignCenter',
          'indent',
          'outdent',
        ],
        buttonsVisible: 0,
      },
      moreRich: {
        buttons: [
          'insertLink',
          'specialCharacters',
          // 'insertImage',
        ],
        buttonsVisible: 0,
      },

      moreMisc: {
        buttons: ['undo', 'redo', 'insertHR', 'fullscreen'],
        align: 'right',
        buttonsVisible: 2,
      },
    },
  };
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image };
    console.log(imageFile);
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
      heading: data.title,
      description: data.message,
      images: imageUrl || [''],
      author: userId,
    };

    console.log(postData);

    const res = await toast.promise(
      axios.post('http://localhost:7000/api/v1/blogs', postData),
      {
        loading: 'Saving blog...',
        success: 'Blog post saved!',
        error: 'Failed to save blog post.',
      }
    );

    if (res?.data?.status === 'success') {
      reset();
      setImage(null);
    }
  };

  return (
    <div className="mt-16 max-w-7xl xl:mx-auto px-6">
      <Toaster />
      <h3 className="text-4xl dark:text-cyan-50 font-bold mb-5 md:mb-12 font-josep ">
        Write a blog
      </h3>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full   mb-10 ">
        <div className="flex md:flex-row flex-col gap-7 lg:gap-10">
          <div className="extraOutline bg-white  md:w-[40%] lg:w-[45%] xl:w-[40%] h-[50vh] lg:h-[60vh] sm:h-[60vh] rounded-md">
            <div
              onClick={handleImage}
              className="file_upload relative h-full rounded-lg"
            >
              {image ? (
                <img
                  className="w-full h-full object-cover"
                  src={URL.createObjectURL(image)}
                  alt=""
                />
              ) : (
                <div className="border-4 border-dashed border-stone-700  h-full flex flex-col items-center justify-center">
                  <svg
                    className="text-stone-700 w-24 mx-auto "
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
          <div className="flex-1 flex flex-col gap-5 -mt-2">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <label className="font-semibold text-base text-stone-700 dark:text-cyan-50">
                  Title
                </label>
                <input
                  {...register('title', { required: true })}
                  className="py-2 px-4 text-base outline-none rounded-lg text-primary-dark  border border-gray-300"
                  type="text"
                />
                {errors.title && (
                  <p className="text-sm font-semibold text-red-600">
                    Title is required
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-base text-stone-700 dark:text-cyan-50">
                Blog post
              </label>
              <Controller
                name="message"
                rules={{ required: true }}
                control={control}
                defaultValue=""
                className=""
                render={({ field }) => (
                  <FroalaEditor
                    tag="textarea"
                    model={field.value}
                    onModelChange={field.onChange}
                    config={options}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-10  bg-primary-light px-4 py-2 font-semibold rounded-md text-red-50 "
        >
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default BlogPost;
