const ProjectShimmer = () => {
  return (
    <div className="border border-gray-500 rounded-lg p-4 m-2 md:w-[30%] md:h-[15rem] w-[95%] h-[12rem] bg-gray-400 cursor-pointer">
      <div className="flex items-center justify-between">
        <p className="text-3xl font-bold my-2 text-yellow-500"></p>

        <div className="w-[30px] h-[30px] rounded-full" />
      </div>
      <hr />
      <div className="pt-3">
        <div className="rounded-lg bg-gray-300 w-full h-full" />
      </div>
    </div>
  );
};

export default ProjectShimmer;
