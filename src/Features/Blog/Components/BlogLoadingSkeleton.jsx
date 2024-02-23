const BlogLoadingSkeleton = (data) => {
  return Array.from(
    { length: data?.data?.properties?.length || 4 },
    (_, index) => (
      <div key={index}>
        <div className="max-w-md mx-auto rounded-lg dark:bg-card-dark shadow-md bg-white animate-pulse">
          <div className="w-full">
            <div className="h-56 w-full bg-gray-300 rounded-t-lg relative"></div>
          </div>

          <div className="p-5">
            <div className="h-4 w-[30%] bg-gray-300 mb-5"></div>
            <div className="h-4 w-[80%] bg-gray-300 mb-3"></div>

            <div className="h-4 w-1/2 bg-gray-300 mb-6"></div>

            <div className="h-2 w-[80%] bg-gray-300 mb-2"></div>
            <div className="h-2 w-[80%] bg-gray-300 mb-2"></div>
            <div className="h-2 w-1/2 bg-gray-300 mb-6"></div>
            <div className=" rounded-full h-8 w-1/3 bg-gray-300 mb-2"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default BlogLoadingSkeleton;
