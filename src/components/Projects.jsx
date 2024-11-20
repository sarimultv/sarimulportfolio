import { lazy, Suspense } from "react";
import { items } from "../utils/items";
import ProjectShimmer from "./ProjectShimmer";

const Projects = () => {
  const Project = lazy(() => import("./Project"));

  return (
    <div className="md:w-screen md:h-screen max-sm:p-4 max-sm:pb-20">
      <h1 className="uppercase font-bold text-4xl flex justify-center md:pt-20 pt-6">
        My <span className="text-yellow-500 ml-1">Portfolio</span>
      </h1>
      <div className="md:mt-20 md:mx-5 md:flex md:items-center md:justify-center md:flex-wrap md:pb-6 mt-6">
        {items.map((item) => (
          <Suspense key={item.id} fallback={<ProjectShimmer />}>
            {/* <ProjectShimmer /> */}
            <Project item={item} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Projects;
