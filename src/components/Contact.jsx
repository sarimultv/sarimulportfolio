import { useSelector } from "react-redux";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
  const mode = useSelector((store) => store.appTheme.mode);
  return (
    <div className="md:h-screen w-[100%]">
      <h1 className="uppercase font-bold text-4xl flex justify-center md:mt-20 pt-6">
        Contact <span className="text-yellow-500">Me</span>
      </h1>
      <div className="md:flex md:items-center md:mt-20 mt-6 p-2">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
