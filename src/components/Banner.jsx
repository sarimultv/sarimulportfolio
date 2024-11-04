import {
  USER_COMPANY,
  USER_INTRO,
  USER_NAME,
  USER_ROLE,
} from "../utils/constants";
import { Link } from "react-router-dom";
import BannerPhoto from "./BannerPhoto";

const Banner = () => {
  return (
    <div className="md:px-10 md:py-7 md:h-screen md:bg-gradient-to-r md:from-yellow-500 md:to-40 w-full h-full p-4">
      <div className="md:flex md:items-center md:justify-between">
        <BannerPhoto />
        <div className="md:w-[50%]">
          <div className="font-bold md:py-5 py-2">
            <h1 className="md:text-4xl text-2xl uppercase">
              - I'm <span className="text-yellow-500">{USER_NAME}</span>.
            </h1>
            <h1 className="md:text-lg capitalize">
              {USER_ROLE}, {USER_COMPANY}
            </h1>
          </div>
          <div className="md:w-[90%] pb-4">
            <p className="pt-2">{USER_INTRO}</p>
            <div className="md:flex md:items-center md:pt-10 flex justify-center pt-5">
              <ul>
                <Link to={"/about"}>
                  <li className="font-bold uppercase p-4 border border-yellow-500 rounded-2xl cursor-pointer hover:bg-yellow-500 hover:text-white">
                    more about me
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
