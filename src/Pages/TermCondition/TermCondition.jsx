import { MdOutlineClose } from "react-icons/md";
const TermCondition = ({ onClose }) => {
  return (
    <div className="max-w-xl absolute top-32 left-1/2 -translate-x-1/2 bg-slate-100 text-white py-7 px-8 rounded-md z-40 max-h-[calc(100vh-200px)] overflow-y-scroll">
      <button
        onClick={() => onClose(false)}
        className="text-white absolute right-4 top-4 font-bold text-lg bg-red-500 p-1 rounded-md hover:opacity-80"
      >
        <MdOutlineClose />
      </button>
      <h2 className="text-center mb-3 font-semibold text-[#eb6753] text-lg underline">
        Terms and Conditions of Property Hunter
      </h2>
      <p className="text-black">
        Welcome to Property Hunter! By accessing and using our website, you
        agree to comply with and be bound by the following terms and conditions.
        <br />
        <br />
        If you do not agree with any part of these terms, please do not use our
        website.
        <br />
        <span className="font-semibold">1. Acceptance of Terms: </span>
        By using Property Hunter, you acknowledge that you have read,
        understood, and agree to be bound by these terms and conditions. We
        reserve the right to modify or update these terms at any time, and it is
        your responsibility to review them regularly.
        <br />
        <span className="font-semibold">2. User Responsibilities: </span>You are
        responsible for maintaining the confidentiality of your account and
        password. You agree to notify us immediately of any unauthorized use of
        your account. You are solely responsible for all activities that occur
        under your account.
        <br />
        <span className="font-semibold">3. Property Listings: </span>a. [Your
        Property Website] serves as a platform for property listings. Property
        details provided by sellers are the responsibility of the sellers. We do
        not guarantee the accuracy, completeness, or authenticity of the
        information. b. [Your Property Website] reserves the right to remove any
        listing that violates our policies or is deemed inappropriate without
        notice.
        <br />
        <span className="font-semibold">4. User Conduct: </span>a. Users must
        not engage in any activity that may disrupt or interfere with the proper
        functioning of the website. b. Users must not use the website for any
        unlawful purpose or violate any applicable laws and regulations.
        <br />
        <span className="font-semibold">5. Privacy Policy: </span>Your use of
        [Your Property Website] is also governed by our Privacy Policy. Please
        review the Privacy Policy to understand how we collect, use, and
        disclose information.
        <br />
        <span className="font-semibold">6. Intellectual Property: </span>a.
        [Your Property Website] and its content, including logos, graphics, and
        text, are the property of [Your Company] and are protected by copyright
        laws. b. Users are prohibited from reproducing, distributing, or
        creating derivative works without prior written consent from [Your
        Company].
        <br />
        <span className="font-semibold">7. Disclaimer of Warranties: </span>a.
        [Your Property Website] is provided on an "as-is" and "as-available"
        basis. We make no warranties or representations regarding the accuracy
        or completeness of the content. b. We do not guarantee uninterrupted,
        secure, or error-free access to the website.
        <br />
        <span className="font-semibold">8. Limitation of Liability: </span>a.
        [Your Company] shall not be liable for any direct, indirect, incidental,
        special, or consequential damages arising out of or in connection with
        your use of [Your Property Website]. b. [Your Company] is not
        responsible for any disputes between buyers and sellers that may arise
        from the use of our website.
        <br />
        <span className="font-semibold">9. Governing Law: </span>These terms and
        conditions are governed by and construed in accordance with the laws of
        [Your Jurisdiction]. Any disputes arising under or in connection with
        these terms shall be subject to the exclusive jurisdiction of the courts
        in [Your Jurisdiction].
        <br />
        <span className="font-semibold">10. Contact Information: </span>If you
        have any questions or concerns regarding these terms and conditions,
        please contact us at [Your Contact Email]. Thank you for using [Your
        Property Website]! We hope you have a positive experience.
      </p>
    </div>
  );
};

export default TermCondition;
