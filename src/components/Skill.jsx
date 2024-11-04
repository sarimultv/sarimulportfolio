import React from "react";

const Skill = ({ skills }) => {
  const { skillName, skillProficiency } = skills;
  return (
    <div className="my-3 p-2">
      <li className="px-5 py-8 rounded-full border-8 ">
        <span className="font-bold text-3xl">{skillProficiency}%</span>
      </li>
      <h2 className="mt-4 uppercase flex justify-center">{skillName}</h2>
    </div>
  );
};

export default Skill;
