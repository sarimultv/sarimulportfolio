import { useState } from "react";
import { FaGithub } from "react-icons/fa6";

const Project = ({ item }) => {
  const { projectName, projectURL, githubLink, imageSrc, description } = item;

  const [showDesc, setShowDesc] = useState(false);

  const handleShowDesc = () => {
    setTimeout(() => {
      setShowDesc(true);
    }, 200);
  };

  const handleHideDesc = () => {
    setTimeout(() => {
      setShowDesc(false);
    }, 200);
  };

  return (
    <div className="border border-gray-500 rounded-lg p-4 m-2 md:w-[30%] md:h-[16rem] cursor-pointer">
      <div className="flex items-center justify-between">
        <a href={projectURL} target="_blank">
          <p className="text-3xl font-bold my-2 text-yellow-500">
            {projectName}
          </p>
        </a>
        <a href={githubLink} target="_blank">
          <FaGithub size={25} />
        </a>
      </div>
      <hr />
      {showDesc ? (
        <div className="pt-3 h-[13.7rem]">
          <p
            className="bg-gray-100 p-2 rounded-lg"
            onMouseLeave={handleHideDesc}
          >
            {description}
          </p>
        </div>
      ) : (
        <div className="pt-3">
          <a href={projectURL} target="_blank">
            <img
              className="rounded-lg"
              src={imageSrc}
              alt="projects thumbnail"
              onMouseOver={handleShowDesc}
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;
