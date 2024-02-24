const Modal = ({ deleteComment, setShowModal }) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 bg-black z-[999] overflow-y-auto flex items-center justify-center">
      <div className="bg-white dark:bg-card-dark  py-5 px-5 sm:w-[60%] md:w-[50%] lg:w-[40%] rounded-md flex-col flex gap-4">
        <h3 className="font-bold text-lg text-center ">Delete comment</h3>
        <div>
          <hr />
          <hr />
        </div>

        <p className="text-center ">
          Are you sure you want to delete this comment?
        </p>

        <div className="flex items-center gap-4 justify-center xs:justify-end mt-2">
          <button
            onClick={() => setShowModal(false)}
            className="border-2 text-primary-light border-primary-light px-6 py-1 rounded-sm font-semibold "
          >
            Cancle
          </button>

          <button
            onClick={() => deleteComment()}
            className="bg-primary-light border-2  border-primary-light px-6 py-1 rounded-sm font-semibold text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
