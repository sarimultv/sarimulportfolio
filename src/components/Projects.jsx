import { items } from "../utils/items";
import Project from "./Project";

const Projects = () => {
  return (
    <div className="w-screen h-screen pb-2">
      <h1 className="uppercase font-bold text-4xl flex justify-center mt-20">
        My <span className="text-yellow-500">Portfolio</span>
      </h1>
      <div className="mt-20 mx-5 flex items-center justify-center flex-wrap">
        {items.map((item) => (
          <Project key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
