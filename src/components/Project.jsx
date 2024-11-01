import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const Project = ({ item }) => {
  const { projectName, projectURL, githubLink, imageSrc } = item;

  return (
    <div className="border border-gray-500 rounded-lg p-4 m-2 w-[30%] cursor-pointer ">
      <div className="flex items-center justify-between">
        <Link to={projectURL}>
          <p className="text-4xl font-bold my-2 text-yellow-500">
            {projectName}
          </p>
        </Link>
        <Link to={githubLink}>
          <FaGithub size={30} />
        </Link>
      </div>
      <hr />
      <div className="pt-3">
        <img className="rounded-lg" src={imageSrc} alt="projects thumbnail" />
      </div>
    </div>
  );
};

export default Project;
