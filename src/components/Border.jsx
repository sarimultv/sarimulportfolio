import { useSelector } from "react-redux";

const Border = () => {
  const mode = useSelector((store) => store.appTheme.mode);
  return (
    <div className="flex justify-center items-center pt-5">
      <div
        className={`border-b w-[50%] ${mode === "black" && "border-gray-900"}`}
      ></div>
    </div>
  );
};

export default Border;
