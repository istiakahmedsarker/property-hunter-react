const NoItems = () => {
  return (
    <div className="h-[60vh]  text-stone-500 flex-col flex items-center justify-center">
      <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Ooops !!!</h3>
      <p className="text-center">We did not find any results.</p>
      <p className="text-center">
        Please try cleaning some filter or try searching again.
      </p>
    </div>
  );
};

export default NoItems;
