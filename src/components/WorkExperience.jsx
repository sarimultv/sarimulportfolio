import { PiSuitcaseSimpleBold } from "react-icons/pi";
import {
  USER_COMPANY,
  USER_COMPANY_DESCRIPTION,
  USER_COMPANY_JOINING_DATE,
  USER_ROLE,
} from "../utils/constants";
import { useSelector } from "react-redux";

const WorkExperience = () => {
  const mode = useSelector((store) => store.appTheme.mode);
  return (
    <div className="md:w-[100%] md:my-10 flex items-center justify-center md:ml-5">
      <ul className="relative md:-mt-14 -mt-20">
        <li className="my-2 p-3 rounded-full bg-yellow-500 text-white">
          <PiSuitcaseSimpleBold size={20} />
        </li>
      </ul>
      <div className="-ml-5 border-l px-8">
        <span
          className={`px-2 py-1 rounded-3xl uppercase ${
            mode === "white" ? "bg-gray-200" : "bg-gray-900"
          }`}
        >
          {USER_COMPANY_JOINING_DATE} - present
        </span>
        <h2 className="my-2 font-semibold uppercase">
          {USER_ROLE} - {USER_COMPANY}
        </h2>
        <p>{USER_COMPANY_DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default WorkExperience;
