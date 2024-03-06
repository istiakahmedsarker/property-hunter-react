import { Link } from 'react-router-dom';

const SellBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgb(0, 0, 0), rgba(0, 0, 0, 0.5)),
    url('https://res.cloudinary.com/dwopkbaby/image/upload/v1708330338/property_hunter/znmb8ob0nse2gnkhbnz4.webp')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
      }}
    >
      <div className="max-w-7xl mx-auto my-20">
        <div className="max-w-md md:max-w-2xl  sm:bg-none bg-opacity-60 sm:bg-opacity-0 py-12 md:py-16 lg:py-20  px-4 xs:px-10 xl:px-0 rounded-md">
          <h2 className="text-3xl md:text-3xl lg:text-4xl leading-10 font-semibold">
            Sell Your Property With Confidence
          </h2>
          <p className="md:text-lg text-base mt-5">
            Are you curious about the precise value of your home or its
            potential selling price? Benefit from our extensive expertise in the
            luxury home market.
          </p>
          <Link to={'/addProperties'}>
            <button className="mt-5 border py-3 px-5 rounded-md hover:bg-primary-light hover:border-primary-light transition-all font-semibold">
              Add a property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellBanner;
