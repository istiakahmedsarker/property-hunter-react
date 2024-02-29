import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import Lottie from "lottie-react";
import animation from "./Animation/AnimationEmail.json";
import toast from "react-hot-toast";

const EmailSender = () => {
  const [emailList, setEmailList] = useState([]);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const instance = useAxios();

  useEffect(() => {
    async function getData() {
      try {
        const res = await instance.get("/subscriber/all-subscriber");
        const allEmails = res?.data?.data?.subscribers;

        // Use map to extract subscribed_email values
        const emailArray = allEmails.map((mail) => mail?.subscribed_email);

        // Use join to concatenate emails into a comma-separated string
        const concatenatedEmails = emailArray.join(", ");

        setEmailList(concatenatedEmails);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [instance]);

  const sendEmails = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post("/send-emails", {
        emailList: emailList.split(",").map((email) => email.trim()),
        subject,
        message,
      });
      if (response?.data?.status === "success") {
        toast.success("Emails have been sent successfully");
        setSubject('');
        setMessage('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mx-10">
      <div className="relative px-4 dark:bg-card-dark dark:text-in-dark sm:rounded-3xl sm:p-20 lg:p-0 dark:px-4 dark:pb-4">
        <div className="w-[20%] flex justify-center mx-auto">
          <Lottie animationData={animation} loop={true} />
        </div>
        <div className="text-center pb-6">
          <h1 className="text-3xl font-semibold">Email Sender</h1>

          <p className="text-gray-400 mt-2">Send email to all subscribers</p>
        </div>

        <form onSubmit={sendEmails}>
          <label className="text-base">
            Email <span className="text-primary-light">*</span>
          </label>
          <input
            className="mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-primary-light dark:bg-secondary-light"
            placeholder="Email"
            value={emailList}
            onChange={(e) => setEmailList(e.target.value)}
          />
          <label className="text-base">
            Subject <span className="text-primary-light">*</span>
          </label>
          <input
            className="mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-primary-light dark:bg-secondary-light"
            type="text"
            placeholder="Subject"
            name="_subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <label className="text-base">
            Message <span className="text-primary-light">*</span>
          </label>
          <textarea
            className="mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-primary-light dark:bg-secondary-light"
            type="text"
            placeholder="Type your message here..."
            name="message"
            style={{ height: "121px" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <div className="flex justify-between">
            <input
              className="shadow bg-primary-light hover:bg-secondary-light text-white hover:text-primary-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Send ➤"
            />
            <input
              className="shadow bg-red-600 hover:bg-secondary-light text-white hover:text-red-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="reset"
              onClick={() => {
                setSubject('');
                setMessage('');
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailSender;
