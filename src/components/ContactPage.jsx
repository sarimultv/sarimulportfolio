import { contactDetails } from "../utils/contactDetails";

const ContactPage = () => {
  const { userEmail, userMobile } = contactDetails;

  return (
    <div className="max-sm:pb-20">
      <p className="pb-4">
        Please feel free to contact me, should you need any additional
        information or clarification. I’m just one text away!
      </p>
      <div className="flex justify-center items-center gap-4 pt-2">
        <a href={`https://wa.me/${userMobile}`} target="_blank">
          <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-white flex items-center justify-center md:py-3 md:pl-4 py-3 cursor-pointer md:text-2xl rounded-lg pl-2 pr-1">
            WhatsApp
            <img
              className="md:w-14 w-9 object-cover max-sm:ml-1"
              src="./whatsapp.png"
              alt="whatsapp thumbnail"
            />
          </button>
        </a>

        <a href={`mailto:${userEmail}`}>
          <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-white flex items-center justify-center md:py-3 md:px-4 py-3 cursor-pointer md:text-2xl rounded-lg px-2">
            <span className="hidden sm:block mr-1">Contact me via</span> Email
            Me
            <img
              className="md:w-12 w-8 object-cover ml-1"
              src="./email.png"
              alt="email thumbnail"
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
