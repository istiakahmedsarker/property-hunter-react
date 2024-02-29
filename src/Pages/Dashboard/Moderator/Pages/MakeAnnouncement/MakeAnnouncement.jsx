import toast from "react-hot-toast";
import { useState, useRef } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import useAuth from "../../../../../Hooks/useAuth";
import useAxios from "../../../../../Hooks/useAxios";

const MakeAnnouncement = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [heading, setHeading] = useState("");
  const [notice, setNotice] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [emojiTarget, setEmojiTarget] = useState(null);
  const headingRef = useRef(null);
  const noticeRef = useRef(null);
  const {user} = useAuth();
  const instance = useAxios();

  const handlePost = async (e) => {
    e.preventDefault();

    const postNotice = { 
      admin_name: name, 
      post_date: date, 
      heading: heading,
      notice_details: notice,
      user_email: user.email,  };

    // console.log(postNotice);

    const res = await instance .post("/announcement/create-announcement",
      postNotice
    );
    if (res?.data?.status === "success") {
      // Reset form fields
      setName("");
      setDate("");
      setHeading("");
      setNotice("");

      // Hide emoji picker and reset emojiTarget
      setShowEmojiPicker(false);
      setEmojiTarget(null);
      toast.success("Notice Post Successfully");
    } else {
      toast.error("Notice Post Failed");
    }
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);

    if (emojiTarget === "heading") {
      setHeading(insertEmojiHeading(heading, emoji));
    } else if (emojiTarget === "notice") {
      setNotice(insertEmojiNotice(notice, emoji));
    }

    // Reset emoji target and hide the emoji picker
    // setEmojiTarget(null);
    // setShowEmojiPicker(false);

    // Focus on the input field after adding an emoji
    headingRef.current.focus();
    noticeRef.current.focus();
  };

  const insertEmojiHeading = (text, emoji) => {
    const start = headingRef.current.selectionStart;
    const end = headingRef.current.selectionEnd;

    const newText = text.substring(0, start) + emoji + text.substring(end);

    return newText;
  };
  const insertEmojiNotice = (text, emoji) => {
    const start = noticeRef.current.selectionStart;
    const end = noticeRef.current.selectionEnd;

    const newText = text.substring(0, start) + emoji + text.substring(end);

    return newText;
  };

  return (
    <div className="dark:bg-primary-dark h-screen flex justify-center items-center">
      <div className="card shrink-0 w-full lg:w-[50%] mx-auto  mb-40 dark:text-[#e4e6cd]">
        <form onSubmit={handlePost} className="card-body">
          <h3 className="text-xl font-semibold text-center">
            Make Announcement
          </h3>
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text dark:text-[#e4e6cd]">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered focus:outline-none focus:border-primary-light dark:bg-[#3a3b3c]"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text dark:text-[#e4e6cd]">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="date"
                className="input input-bordered focus:outline-none focus:border-primary-light dark:bg-[#3a3b3c] dark:text-white"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-[#e4e6cd]">Heading</span>
            </label>
            <input
              type="text"
              name="heading"
              placeholder="Heading"
              className="input input-bordered focus:outline-none focus:border-primary-light relative dark:bg-[#3a3b3c]"
              required
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              ref={headingRef}
            />
            <span
              onClick={() => {
                setEmojiTarget("heading");
                setShowEmojiPicker(!showEmojiPicker);
              }}
              className="cursor-pointer  absolute right-10 bottom-[250px]"
            >
              <BsEmojiSmile className="text-xl text-primary-light dark:text-white hover:text-slate-300" />
            </span>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-[#e4e6cd]">Notice</span>
            </label>
            <textarea
              className="textarea focus:outline-none focus:border-primary-light relative dark:bg-[#3a3b3c] dark:text-white"
              name="notice"
              placeholder="Notice"
              required
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
              ref={noticeRef}
            />
            <span
              onClick={() => {
                setEmojiTarget("notice");
                setShowEmojiPicker(!showEmojiPicker);
              }}
              className="cursor-pointer  absolute right-10 bottom-36"
            >
              <BsEmojiSmile className="text-xl text-primary-light hover:text-slate-300 dark:text-white" />
            </span>
          </div>
          {showEmojiPicker && (
            <div className="absolute top-[80%] left-0">
              <Picker
                data={data}
                emojiSize={20}
                emojiButtonSize={28}
                onEmojiSelect={addEmoji}
                maxFrequentRows={0}
              />
            </div>
          )}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn text-white uppercase bg-primary-light hover:text-primary-light"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
