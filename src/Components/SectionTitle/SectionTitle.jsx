const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      <h3 className="text-center  bg-primary-light px-4 md:px-6 py-1 md:text-base text-sm  -rotate-[7deg] text-white font-gloria">
        {title}
      </h3>
      <h5 className="text-center text-primary-dark dark:text-[#f3f5ff] text-2xl md:text-3xl font-bold mt-2">
        {subTitle}
      </h5>
    </div>
  );
};

export default SectionTitle;
