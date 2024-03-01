import { IoNotificationsSharp } from "react-icons/io5";
import useNotifications from "../../../Hooks/useNotifications";
import './Notification.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Notifications = () => {
  const [newAnnouncement, refetch] = useNotifications([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [latestAnnouncementCount, setLatestAnnouncementCount] = useState(0);

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // set latest announcements
    refetch();
    setLatestAnnouncementCount(newAnnouncement.length);
  }, [newAnnouncement, refetch]);

  const handleModalOpen = () => {
    // length Reset count 
    setLatestAnnouncementCount(0);
    setModalOpen(true);
  };

  return (
    <div>
      <h3
        className="flex cursor-pointer items-start dark:text-in-dark relative"
        onClick={handleModalOpen}
      >
        <IoNotificationsSharp className="text-2xl" />
        <span className="bg-primary-light text-white px-2 rounded-badge text-xs -ml-2 -mt-1">
          {latestAnnouncementCount}
        </span>
      </h3>
      {/* notification Modal */}
      <div className=" ">
        <dialog id="my_modal_3" className="modal" open={modalOpen}>
          <div className="modal-box bg-secondary-light dark:text-in-dark dark:bg-primary-dark">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-outline hover:bg-primary-light text-primary-light hover:dark:bg-primary-light hover:border-none btn-ghost absolute text-sm right-2 top-2 hover:text-white"
                onClick={closeModal}
              >
                ✕
              </button>
            </form>
            <div className="announcement-container">
              {newAnnouncement.length > 0 ? (
                newAnnouncement.map((notice) => (
                  <div key={notice._id}>
                    <h3 className="text-base font-medium">
                      {notice.heading} .{" "}
                      <Link
                        to={`/notificationDetails/${notice._id}`}
                        onClick={closeModal}
                      >
                        <span className="text-base font-normal text-primary-light">
                          view
                        </span>
                      </Link>{" "}
                    </h3>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center">No Notification</p>
              )}
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Notifications;
