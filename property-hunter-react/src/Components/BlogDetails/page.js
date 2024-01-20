import Image from "next/image";
import React from "react";
import BlogComments from "../BlogComments/page";

const BlogDetails = ({blogs}) => {
  const {heading,shortDescription,description,images,comments:comment} = blogs;
  // console.log(blogs)
  return (
    <div className=" max-w-6xl mx-auto mt-10">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            className="rounded-md"
            src={images}
            height="350"
            width="600"
            alt="blog details image"
          ></Image>
        </div>
        <div className="bg-slate-100 px-4 py-7 rounded-md">
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
