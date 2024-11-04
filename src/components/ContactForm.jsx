import { useRef, useState } from "react";

const ContactForm = () => {
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userMessage = useRef(null);

  const [errMsg, setErrMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });

  const handleSubmitForm = async (evt) => {
    evt.preventDefault();

    setFormData({
      userName: userName.current.value,
      userEmail: userEmail.current.value,
      userMessage: userMessage.current.value,
    });

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify({ ...formData, "form-name": "contact" }),
    });

    if (response.ok) {
      setFormData({
        userName: "",
        userEmail: "",
        userMessage: "",
      });
      setSuccessMsg(true);
    } else {
      setErrMsg(true);
    }
  };

  return (
    <form
      className="md:w-[60%] pt-4"
      onSubmit={handleSubmitForm}
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value={"contact"} />
      <input
        type="hidden"
        name="redirect"
        value={"https://sarimulbio.netlify.app/"}
      />
      <input
        type="text"
        ref={userName}
        className="p-2 border border-gray-500 outline-yellow-500 bg-transparent rounded-2xl md:w-[43%] w-[100%] md:mr-4 md:mb-4 mb-2"
        placeholder="Enter Your Name"
      />

      <input
        type="email"
        ref={userEmail}
        className="p-2 border border-gray-500 outline-yellow-500 bg-transparent rounded-2xl md:w-[43%] w-[100%] md:ml-4 md:mb-4 mb-2"
        placeholder="Enter Your Email"
      />

      <textarea
        type="text"
        ref={userMessage}
        rows={6}
        className="p-2 border border-gray-500 outline-yellow-500 bg-transparent rounded-2xl md:w-[90%] w-[100%] md:mb-3"
        placeholder="Enter Your Message"
      ></textarea>
      <input
        type="submit"
        className="font-bold uppercase p-2 border border-yellow-500 rounded-2xl cursor-pointer hover:bg-yellow-500 hover:text-white md:w-[90%] w-[100%]"
        value={"Submit"}
      />
      {successMsg && (
        <p className="py-2 text-green-700">Mail sent successfully!</p>
      )}
      {errMsg && (
        <p className="py-2 text-red-900">Error sending mail, try again.</p>
      )}
    </form>
  );
};

export default ContactForm;
