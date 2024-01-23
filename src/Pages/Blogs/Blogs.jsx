import React, { useEffect, useState } from 'react';
import BlogCard from '../../Components/BlogCard/BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                fetch('https://property-hunter-server.vercel.app/api/v1/blogs')
                .then(res => res.json())
                .then(data => setBlogs(data.data.blogs))

                // setBlogs(blogsData.data.blogs);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ml-36">
                <div className="col-span-2">
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
                        {
                            blogs?.map((blog) => <BlogCard key={blog._id} blog={blog} />)
                        }
                    </div>
                </div>
                <div className="">
                    Featured Blogs
                </div>
            </div>
        </div>
    );
};

export default Blogs;
