import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Pagination = ({ totalPage, activePage, setActivePage }) => {
  let pages = [];

  const totalPageCalc = () => {
    for (let x = 1; x <= totalPage; x++) {
      pages.push(x);
    }
  };
  totalPageCalc();

  const previousPage = () => {
    if (activePage === 1) return activePage;
    setActivePage(activePage - 1);
  };

  const nextPage = () => {
    if (activePage === totalPage) return activePage;
    setActivePage(activePage + 1);
  };
  return (
    <>
      {totalPage > 1 ? (
        <div className="flex items-center justify-center gap-5 mt-20">
          <button
            className={`${
              activePage === 1
                ? 'disabled bg-stone-400 rounded-full opacity-50 cursor-not-allowed p-3'
                : 'bg-white p-3 shadow-md rounded-full'
            }`}
            onClick={previousPage}
          >
            <FaArrowLeft />
          </button>

          {pages.map((pageNo) => (
            <button
              className={`${
                activePage === pageNo
                  ? 'bg-primary-light hidden md:inline font-semibold text-white px-4 py-2 rounded-full'
                  : 'px-4 py-2 hidden md:inline rounded-full font-semibold bg-white shadow-md'
              } `}
              key={pageNo}
              onClick={() => setActivePage(pageNo)}
            >
              {pageNo}
            </button>
          ))}

          <button className="inline md:hidden dark:text-in-dark">
            <span className="font-bold dark:text-in-dark">{activePage}</span> of{' '}
            {totalPage}
          </button>

          <button
            className={`${
              activePage === totalPage
                ? 'disabled bg-stone-400 rounded-full opacity-50 cursor-not-allowed p-3'
                : 'bg-white p-3 shadow-md rounded-full'
            }`}
            onClick={nextPage}
          >
            <FaArrowRight />
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Pagination;
