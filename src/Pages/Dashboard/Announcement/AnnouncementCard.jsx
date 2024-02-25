

const AnnouncementCard = ({announcement, index}) => {
  const {_id,admin_name,post_date,heading,notice_details ,user_email }= announcement || {};
  return (
    <div className="bg-[#fff] w-full dark:bg-[url('https://i.ibb.co/JFb1r7L/Mesh-gradient-3.png')] dark:bg-card-dark bg-cover bg-bottom py-3 h-auto text-wrap max-w-full break-words px-4 rounded-md">
      <div className="flex justify-between mb-3 font-bold text-wrap break-words h-full w-full">
      <div className="text-wrap h-full w-full">
      <p className="text-xs lg:text-sm font-thin dark:text-gray-400">{admin_name}<span className="ml-4">{post_date}</span></p>
      <h3 className="text-xl lg:text-3xl font-bold mb-3 text-gray-900 dark:text-in-dark text-wrap max-w-full break-words ">{heading}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-lg font-normal">
       {notice_details}
      </p>
   
      </div>
      <span className="bg-primary-light h-6 md:h-10 w-6 md:w-10 rounded-full text-white text-xs  md:text-sm flex justify-center items-center ">
          {index + 1}
        </span>
      </div>

      
    </div>
  );
};

export default AnnouncementCard;
