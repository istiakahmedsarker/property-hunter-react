import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import AnnouncementCard from "./AnnouncementCard";

const Announcement = () => {
  return (
    <div className="mt-20">
      <SectionHeader header={"Announcement"} />
      <div className="grid grid-cols-2 gap-4 mt-10">
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
      </div>
    </div>
  );
};

export default Announcement;
