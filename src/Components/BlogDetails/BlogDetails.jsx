import React from "react";
import BlogComments from "../BlogComments/BlogComments";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const {id} = useParams()
  const {heading,shortDescription,description,images,comments:comment} = blogs;
  console.log(id)
  return (
    <div className=" max-w-6xl mx-auto mt-10">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            className="rounded-md"
            src={images}
            height="350"
            width="600"
            alt="blog details image"
          ></img>
        </div>
        <div className="bg-slate-100 px-4 py-7 ">
          <h2 className="text-3xl font-bold">{heading}</h2>
          <h3 className="text-2xl text-gray-500 ">{shortDescription}</h3>
          <p className="text-lg mt-4">{description}</p>
        </div>
      </div>
      <BlogComments comments = {comment}/>
    </div>
  );
};

export default BlogDetails;
