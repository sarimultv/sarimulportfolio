import Skills from "./Skills";
import Educations from "./Educations";
import { useSelector } from "react-redux";
import Border from "./Border";
import { contactDetails } from "../utils/contactDetails";
import { lazy, Suspense } from "react";
import BannerShimmer from "./BannerShimmer";

const About = () => {
  const mode = useSelector((store) => store.appTheme.mode);

  const resumeFileUrl = "./Sarimul_Laskar.pdf";
  const resumeFileName = "Sarimul_Laskar.pdf";

  const {
    userName,
    githubUserName,
    linkedInUserName,
    languageKnown,
    yearsOfExp,
    projectComp,
    userEmail,
    userMobile,
  } = contactDetails;

  const BannerPhotoLazy = lazy(() => import("./BannerPhoto"));

  return (
    <div className="md:w-[100%] max-sm:p-2">
      <h1 className="uppercase font-bold text-4xl flex justify-center md:mt-5 pt-6">
        About <span className="text-yellow-500">Me</span>
      </h1>
      <div className="md:flex md:items-center md:mt-20 md:ml-20 mt-4 mb-6">
        <div className="md:w-[50%] md:mr-10 p-2">
          <h1 className="uppercase font-bold text-2xl mb-4">Personal Info</h1>
          <div className="sm:hidden block">
            <Suspense fallback={<BannerShimmer />}>
              <BannerPhotoLazy />
            </Suspense>
          </div>
          <div className="md:flex md:items-center mb-4 max-sm:mt-4">
            <div className="md:mr-2">
              <p className="mb-2 flex items-center gap-2">
                <span
                  className={` ${
                    mode === "white" ? "text-gray-500" : "text-gray-200"
                  }`}
                >
                  Name:{" "}
                </span>{" "}
                {userName}
              </p>

              <p className="mb-2 flex items-center gap-2">
                <span
                  className={` ${
                    mode === "white" ? "text-gray-500" : "text-gray-200"
                  }`}
                >
                  Email:{" "}
                </span>
                <span>{userEmail}</span>
              </p>
              <p className="mb-2 flex items-center gap-2">
                <span
                  className={` ${
                    mode === "white" ? "text-gray-500" : "text-gray-200"
                  }`}
                >
                  Phone:{" "}
                </span>
                <span>+91 {userMobile}</span>
              </p>
            </div>
            <div className="md:ml-10">
              <p className="mb-2 flex items-center gap-2">
                <span
                  className={` ${
                    mode === "white" ? "text-gray-500" : "text-gray-200"
                  }`}
                >
                  Github:{" "}
                </span>
                <span>{githubUserName}</span>
              </p>
              <p className="mb-2 flex items-center gap-2">
                <span
                  className={` ${
                    mode === "white" ? "text-gray-500" : "text-gray-200"
                  }`}
                >
                  LinkedIn:{" "}
                </span>
                <span>{linkedInUserName}</span>
              </p>
              <p className="flex items-center gap-2">
                <span
                  className={` ${
                    mode === "white" ? "text-gray-500" : "text-gray-200"
                  }`}
                >
                  Languages:{" "}
                </span>
                <span>{languageKnown}</span>
              </p>
            </div>
          </div>
          <div className="p-2 flex items-center justify-center cursor-pointer border border-yellow-500 hover:bg-yellow-500 hover:text-white ">
            <a href={resumeFileUrl} download={resumeFileName}>
              <input
                className="font-bold uppercase p-2 cursor-pointer"
                type="button"
                value={"Download CV"}
              />
            </a>
          </div>
        </div>
        <div className="md:w-[50%] p-2 flex items-center justify-center flex-wrap">
          <div className="border border-gray-500 rounded-lg p-4 m-2 w-[45%] h-[10rem]">
            <p className="text-4xl font-bold my-2 text-yellow-500">
              {yearsOfExp}
              <sup>+</sup>
            </p>
            <hr />
            <p className="uppercase my-2">Years of Experience</p>
          </div>
          <div className="border border-gray-500 rounded-lg p-4 m-2 w-[45%] h-[10rem]">
            <p className="text-4xl font-bold my-2 text-yellow-500">
              {projectComp}
              <sup>+</sup>
            </p>
            <hr />
            <p className="uppercase my-2">Completed Projects</p>
          </div>
        </div>
      </div>
      <Border />
      <Skills />
      <Border />
      <Educations />
    </div>
  );
};

export default About;
