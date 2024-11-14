import WorkExperience from "./WorkExperience";
import EducationDetails from "./EducationDetails";

const Educations = () => {
  return (
    <div className="py-2 px-4 pb-12">
      <h1 className="uppercase font-bold text-2xl flex justify-center md:mt-5 pt-6">
        Experience & Education
      </h1>
      <div className="md:flex md:items-center py-6">
        <WorkExperience />
        <EducationDetails />
      </div>
    </div>
  );
};

export default Educations;
