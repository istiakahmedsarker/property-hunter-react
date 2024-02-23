import { Link } from "react-router-dom";

const SellBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dwopkbaby/image/upload/v1708330338/property_hunter/znmb8ob0nse2gnkhbnz4.webp')`,
        padding: "100px 55px",
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "15px",
        color: "white",
      }}
      className="max-w-7xl mx-auto my-20"
    >
      <div className="max-w-96 md:max-w-2xl">
        <h2 className="text-4xl leading-10 font-semibold">
          Sell Your Home With Confidence
        </h2>
        <p className="text-lg mt-5">
          Are you curious about the precise value of your home or its potential
          selling price? Benefit from our extensive expertise in the luxury home
          market.
        </p>
        <Link to={"/addProperties"}>
          <button className="mt-5 border py-3 px-5 rounded-md hover:bg-primary-light hover:border-primary-light transition-all font-semibold">
            Add a property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SellBanner;
