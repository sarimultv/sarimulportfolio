import ContactDetails from "./ContactDetails";
import Border from "./Border";
import ContactPage from "./ContactPage";

const Contact = () => {
  return (
    <div className="md:h-screen w-[100%] max-sm:px-2 max-sm:py-2">
      <h1 className="uppercase font-bold text-4xl flex justify-center md:pt-20 pt-6">
        Contact <span className="text-yellow-500 ml-1">Me</span>
      </h1>
      <div className="md:flex md:items-center md:mt-20 mt-6 max-sm:px-4">
        <ContactDetails />
        <div className="pb-6">
          <Border />
        </div>
        <ContactPage />
      </div>
    </div>
  );
};

export default Contact;
