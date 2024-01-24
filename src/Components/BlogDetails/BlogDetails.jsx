import axios from 'axios';
import BlogComments from '../BlogComments/BlogComments';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BlogDetails = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getBlog = async () => {
      const res = await axios.get(`http://localhost:7000/api/v1/blogs/${id}`);
      console.log(res);
      setData(res.data.data.blog);
    };
    getBlog();
  }, [id]);
  console.log(data);

  console.log();
  const {
    heading,
    shortDescription,
    description,
    images,
    comments: comment,
  } = data || {};
  return (
    <div className=" max-w-6xl mx-auto mt-10">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            className="rounded-md"
            // src={images}
            height="350"
            width="600"
            alt="blog details image"
          ></img>
        </div>
        <div className="bg-slate-100 px-4 py-7 ">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <h3 className="text-2xl text-gray-500 ">{shortDescription}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-lg mt-4"
          />
          {/* <div className="text-lg mt-4">{parse(description)}</div> */}
        </div>
      </div>
      <BlogComments comments={comment} />
    </div>
  );
};

export default BlogDetails;
