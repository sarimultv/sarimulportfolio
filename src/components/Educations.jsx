import WorkExperience from "./WorkExperience";
import EducationDetails from "./EducationDetails";
import { workItems } from "../utils/workExperience";
import { educationItems } from "../utils/education";

const Educations = () => {
  return (
    <div className="py-2 px-4 pb-12">
      <h1 className="uppercase font-bold text-2xl flex justify-center md:mt-5 pt-6">
        Experience & Education
      </h1>
      <div className="md:flex md:items-center md:justify-evenly py-6">
        {workItems.map((item) => (
          <WorkExperience key={item.id} item={item} />
        ))}
        {educationItems.map((item) => (
          <EducationDetails key={item.id} eduDetails={item} />
        ))}
      </div>
    </div>
  );
};

export default Educations;
