import { IoHome } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initialMode } from "../store/themeSlice";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const RightSideNav = () => {
  const dispatch = useDispatch();
  const handleAppTheme = () => {
    console.log("clicked");
    dispatch(initialMode());
  };

  const mode = useSelector((store) => store.appTheme.mode);

  return (
    <div className="w-[5%] mr-10">
      <ul>
        <Link to={"/"}>
          <li className="flex justify-center items-center mb-2 p-5 bg-gray-200 text-black rounded-full hover:bg-yellow-500 hover:text-white">
            <span className="hidden">Home</span>
            <IoHome size={20} />
          </li>
        </Link>

        <Link to={"/about"}>
          <li className="flex justify-center items-center p-5 bg-gray-200 text-black rounded-full hover:bg-yellow-500 hover:text-white">
            <span className="hidden">About</span>
            <FaUser size={20} />
          </li>
        </Link>

        <Link to={"/projects"}>
          <li className="flex justify-center items-center my-2 p-5 bg-gray-200 text-black rounded-full hover:bg-yellow-500 hover:text-white">
            <span className="hidden">Projects</span>
            <PiSuitcaseSimpleBold size={20} />
          </li>
        </Link>

        <Link to={"/contact"}>
          <li className="flex justify-center items-center my-2 p-5 bg-gray-200 text-black rounded-full hover:bg-yellow-500 hover:text-white">
            <span className="hidden">Contact</span>
            <MdLocalPostOffice size={20} />
          </li>
        </Link>
        <li
          className="flex justify-center items-center p-5 bg-gray-200 text-black rounded-full cursor-pointer hover:bg-yellow-500 hover:text-white"
          onClick={handleAppTheme}
        >
          {mode === "white" ? <FaMoon size={20} /> : <GoSun size={20} />}
        </li>
      </ul>
    </div>
  );
};

export default RightSideNav;
