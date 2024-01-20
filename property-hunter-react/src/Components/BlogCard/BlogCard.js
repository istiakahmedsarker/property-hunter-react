import Link from 'next/link';
import React from 'react';

const BlogCard = ({blog}) => {

    const {title,_id,img,shortDescription} = blog;
    console.log(_id)
    return (
        <div>
            {
                <div className="card bg-base-100 shadow-xl my-5 mx-auto w-96">
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{shortDescription}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/blogs/${_id}`}>
                                    <button className="btn btn-primary">See more</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default BlogCard;