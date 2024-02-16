import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import AnnouncementCard from "./AnnouncementCard";

const Announcement = () => {
  return (
    <div className="h-screen pt-20 dark:bg-primary-dark">
      <SectionHeader header={"Announcement"} />
      <div className="grid grid-cols-2 gap-4 mt-10 ">
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
      </div>
    </div>
  );
};

export default Announcement;
