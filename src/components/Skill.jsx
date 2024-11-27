const Skill = ({ skills }) => {
  const { skillName, skillProficiency } = skills;

  return (
    <div className="my-3 p-2">
      <li className="md:px-7 md:py-10 px-6 py-9 rounded-full border-8">
        <span className="font-bold text-3xl">{skillProficiency}%</span>
      </li>
      <h2 className="mt-4 uppercase flex justify-center font-semibold">
        {skillName}
      </h2>
    </div>
  );
};

export default Skill;
