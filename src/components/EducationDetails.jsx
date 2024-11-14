import { PiSuitcaseSimpleBold } from "react-icons/pi";
import {
  USER_COLLEGE,
  USER_COLLEGE_DESCRIPTION,
  USER_COURSE,
  USER_COURSE_COMPLETION_DATE,
  USER_COURSE_JOINING_DATE,
} from "../utils/constants";
import { useSelector } from "react-redux";

const EducationDetails = () => {
  const mode = useSelector((store) => store.appTheme.mode);
  return (
    <div className="md:w-[100%] md:my-10 flex items-center justify-center md:ml-5 mt-6">
      <ul className="relative md:-mt-14 -mt-[9rem]">
        <li className="my-2 p-3 rounded-full bg-yellow-500 text-white">
          <PiSuitcaseSimpleBold size={20} />
        </li>
      </ul>
      <div className="-ml-5 border-l px-8">
        <span
          className={`px-2 py-1 rounded-3xl ${
            mode === "white" ? "bg-gray-200" : "bg-gray-900"
          }`}
        >
          {USER_COURSE_JOINING_DATE} - {USER_COURSE_COMPLETION_DATE}
        </span>
        <h2 className="my-2 font-semibold uppercase">
          {USER_COURSE} - {USER_COLLEGE}
        </h2>
        <p>{USER_COLLEGE_DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default EducationDetails;
