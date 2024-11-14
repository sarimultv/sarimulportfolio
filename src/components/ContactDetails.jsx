import { useSelector } from "react-redux";
import { contactDetails } from "../utils/contactDetails";

const ContactDetails = () => {
  const { header, headerDetails, userAddress, userEmail, userMobile } =
    contactDetails;

  const mode = useSelector((store) => store.appTheme.mode);
  return (
    <div className="md:w-[40%] md:ml-10">
      <h1 className="uppercase font-bold text-3xl mb-3">{header}</h1>
      <p className="w-[97%] py-2">{headerDetails}</p>
      <div className="md:my-2 my-3 flex gap-2 items-center">
        <span
          className={`uppercase ${
            mode === "white" ? "text-gray-500" : "text-gray-200"
          }`}
        >
          Address:
        </span>
        <p>{userAddress}</p>
      </div>

      <div className="my-2 flex gap-2 items-center">
        <span
          className={`uppercase ${
            mode === "white" ? "text-gray-500" : "text-gray-200"
          }`}
        >
          Mail Me:
        </span>{" "}
        <p className="cursor-pointer">{userEmail}</p>
      </div>
      <div className="my-2 flex gap-2 items-center">
        <span
          className={`uppercase ${
            mode === "white" ? "text-gray-500" : "text-gray-200"
          }`}
        >
          Call Me:
        </span>
        <p className="cursor-pointer">+91 {userMobile}</p>
      </div>
    </div>
  );
};

export default ContactDetails;
