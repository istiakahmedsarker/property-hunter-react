"use client";
const BlogPost = () => {
  const handleBlog = (e) => {
    e.preventDefault();
    alert("Blog not sent");
  };
  return (
    <div className="mt-20 max-w-2xl mx-auto">
      <h2 className="text-center text-3xl">Write your blog here..</h2>
      <form
        onSubmit={handleBlog}
        className="mt-10 flex flex-col items-center gap-4"
      >
        <input
          type="text"
          placeholder="Type Your name"
          class="input input-bordered w-full"
        />
        <input
          className="textarea textarea-bordered w-full"
          placeholder="Short Description (Max Words 60)"
          maxLength={60}
        ></input>
        <input type="file" className="file-input file-input-bordered w-full " />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Write blog"
          rows={5}
          maxLength={60}
        ></textarea>
        <button type="submit" className="btn btn-success self-start text-white">
          Post
        </button>
      </form>
    </div>
  );
};

export default BlogPost;
