import axios from 'axios';
import BlogComments from '../BlogComments/BlogComments';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CommentTemplate from '../Comments/Comments';

const BlogDetails = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getBlog = async () => {
      const res = await axios.get(`https://property-hunter-server.vercel.app/api/v1/blogs/${id}`);
      console.log(res);
      setData(res.data.data.blog);
    };
    getBlog();
  }, [id]);

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
      <div className="grid ">
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
      
      <CommentTemplate avatar={'https://res.cloudinary.com/debqyv4o6/image/upload/v1705411057/zoe-fernandez--zqoE7jnQgw-unsplash_1_heinq5.jpg'} username="kyle" content="Very intersting blog"/>
      <CommentTemplate avatar={'https://res.cloudinary.com/debqyv4o6/image/upload/v1705411090/vince-veras-AJIqZDAUD7A-unsplash_1_l0gfmt.jpg'} username="jully" content="excellent"/>

    </div>
  );
};

export default BlogDetails;
