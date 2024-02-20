import toast from "react-hot-toast";

const NewsLetter = () => {
  const handleNewsLetter = (e) => {
    e.preventDefault();
    toast.error("Mailer not added");
  };
  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/simple-little-house-model-one-story-village-building-3d-rendering_187882-1562.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "15px",
        color: "white",
      }}
      className="py-10 px-6 md:py-20 md:px-10 max-w-7xl mx-auto"
    >
      <h3 className="text-3xl font-semibold max-w-96 leading-10">
        Subscribe our news letter for get our exiting offer!
      </h3>
      <form onSubmit={handleNewsLetter} className="flex items-center mt-5 ">
        <input
          type="text"
          placeholder="Enter your email address"
          className="py-3 px-5  rounded-l-md border-r border-r-primary-light text-primary-light max-w-56 outline-none"
        />
        <button
          type="submit"
          className="border border-none py-3 px-5 rounded-r-md bg-primary-light hover:bg-white hover:border-white transition-all font-semibold hover:text-primary-light"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
