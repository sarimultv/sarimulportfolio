import { useSelector } from "react-redux";

const ContactDetails = () => {
  const mode = useSelector((store) => store.appTheme.mode);
  return (
    <div className="md:w-[40%] md:ml-10">
      <h1 className="uppercase font-bold text-3xl mb-3">Don't Feel Shy !</h1>
      <p className="w-[85%] py-2">
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be part of your visions.
      </p>
      <div className="md:my-2 my-3 flex gap-2 items-center">
        <span
          className={`uppercase ${
            mode === "white" ? "text-gray-500" : "text-gray-200"
          }`}
        >
          Address:
        </span>
        <p>Hi-Tech City, Hyderabad, Telangana</p>
      </div>

      <div className="my-2 flex gap-2 items-center">
        <span
          className={`uppercase ${
            mode === "white" ? "text-gray-500" : "text-gray-200"
          }`}
        >
          Mail Me:
        </span>{" "}
        <p className="cursor-pointer">sarimullaskar.shl@gmail.com</p>
      </div>
      <div className="my-2 flex gap-2 items-center">
        <span
          className={`uppercase ${
            mode === "white" ? "text-gray-500" : "text-gray-200"
          }`}
        >
          Call Me:
        </span>
        <p className="cursor-pointer">+91 7002609020</p>
      </div>
    </div>
  );
};

export default ContactDetails;
