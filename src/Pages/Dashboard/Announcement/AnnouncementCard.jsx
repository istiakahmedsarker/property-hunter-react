const AnnouncementCard = () => {
  return (
    <div className="bg-orange-50 py-3 px-4 rounded-md">
      <div className="flex justify-between mb-3 font-bold">
        <span className="bg-[#eb6753] h-9 w-9 rounded-full text-white flex justify-center items-center ">
          1
        </span>{" "}
        <span>Date: 01/24/2024</span>
      </div>
      <h3 className="text-2xl font-semibold mb-3">Header</h3>
      <p className="text-gray-600 text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta
        quaerat corporis accusamus ex nobis corrupti nulla! Sunt, labore
        molestias?
      </p>
    </div>
  );
};

export default AnnouncementCard;
