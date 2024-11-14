import { IoHome } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLocalPostOffice } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initialMode } from "../store/themeSlice";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { useState } from "react";

const RightSideNav = () => {
  const dispatch = useDispatch();
  const handleAppTheme = () => {
    dispatch(initialMode());
  };

  const mode = useSelector((store) => store.appTheme.mode);

  const [navBgColor, setNavBgColor] = useState("bg-yellow-500");
  const [navTextColor] = useState("text-white");
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isContact, setIsContact] = useState(false);

  const handleHomeBgColor = () => {
    setNavBgColor("bg-yellow-500");
    setIsHome(true);
    setIsAbout(false);
    setIsProject(false);
    setIsContact(false);
  };

  const handleAboutBgColor = () => {
    setNavBgColor("bg-yellow-500");
    setIsHome(false);
    setIsAbout(true);
    setIsProject(false);
    setIsContact(false);
  };

  const handleProjectBgColor = () => {
    setNavBgColor("bg-yellow-500");
    setIsHome(false);
    setIsAbout(false);
    setIsProject(true);
    setIsContact(false);
  };
  const handleContactBgColor = () => {
    setNavBgColor("bg-yellow-500");
    setIsHome(false);
    setIsAbout(false);
    setIsProject(false);
    setIsContact(true);
  };

  return (
    <div className="md:w-[5%] md:mr-10 max-sm:bottom-0 max-sm:fixed max-sm:w-[100%] md:bg-transparent bg-gray-800 py-2">
      <ul className="md:flex-col flex items-center gap-4 justify-evenly">
        <Link to={"/"}>
          <li
            className={`flex justify-center items-center md:p-5 p-3 bg-gray-200 text-black rounded-full hover:bg-yellow-500 hover:text-white ${
              isHome && navBgColor
            } ${isHome && navTextColor}`}
            onClick={handleHomeBgColor}
          >
            <span className="hidden">Home</span>
            <IoHome size={20} />
          </li>
        </Link>

        <Link to={"/about"}>
          <li
            className={`flex justify-center items-center md:p-5 p-3 bg-gray-200 text-black rounded-full hover:bg-yellow-500 hover:text-white 
            ${isAbout && navBgColor} ${isAbout && navTextColor}`}
            onClick={handleAboutBgColor}
          >
            <span className="hidden">About</span>
            <FaUser size={20} />
          </li>
        </Link>

        <Link to={"/projects"}>
          <li
            className={`flex justify-center items-center md:p-5 p-3 bg-gray-200 text-black rounded-full hover:bg-yellow-500 hover:text-white ${
              isProject && navBgColor
            } ${isProject && navTextColor}`}
            onClick={handleProjectBgColor}
          >
            <span className="hidden">Projects</span>
            <PiSuitcaseSimpleBold size={20} />
          </li>
        </Link>

        <Link to={"/contact"}>
          <li
            className={`flex justify-center items-center md:p-5 p-3 bg-gray-200 text-black rounded-full hover:bg-yellow-500 hover:text-white ${
              isContact && navBgColor
            } ${isContact && navTextColor}`}
            onClick={handleContactBgColor}
          >
            <span className="hidden">Contact</span>
            <MdLocalPostOffice size={20} />
          </li>
        </Link>
        <li
          className="flex justify-center items-center md:p-5 p-3 bg-gray-200 text-black rounded-full cursor-pointer hover:bg-yellow-500 hover:text-white"
          onClick={handleAppTheme}
        >
          {mode === "white" ? <FaMoon size={20} /> : <GoSun size={20} />}
        </li>
      </ul>
    </div>
  );
};

export default RightSideNav;
