import { skills } from "../utils/skills";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="pt-2">
      <h1 className="uppercase font-bold text-2xl flex justify-center md:mt-5 pt-6">
        My Skills
      </h1>
      <div className="md:w-[100%] my-5">
        <ul className="flex items-center md:justify-evenly justify-center flex-wrap">
          {skills.map((item) => (
            <Skill key={item.id} skills={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
