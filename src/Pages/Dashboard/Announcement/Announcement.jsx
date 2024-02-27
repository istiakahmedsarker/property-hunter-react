import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import PageTitle from '../../../Features/PageTitle/PageTitle';
import AnnouncementCard from './AnnouncementCard';
import AnnouncementLoader from './Loader/AnnouncementLoader';
import GetAllAnnouncements from './Service/GetAllAnnouncements';

const Announcement = () => {
  const { announcement, isLoading } = GetAllAnnouncements();
  // console.log(announcement);

  return (
    <div className="px-4 md:px-6 lg:px-8 xl:px-12 bg-[url('https://i.ibb.co/JFb1r7L/Mesh-gradient-3.png')] bg-cover bg-center min-h-screen py-6 dark:bg-primary-dark ">
      <PageTitle title="Property Hunter || Announcement"></PageTitle>
      <SectionHeader header={'Announcement'} />

      <div className="h-auto grid grid-cols-1 xl:grid-cols-2 gap-4 mt-10 ">
        {isLoading === true ? (
          <AnnouncementLoader />
        ) : (
          announcement.map((announcement, i) => (
            <AnnouncementCard
              key={announcement._id}
              announcement={announcement}
              index={i}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Announcement;
