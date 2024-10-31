import {
  PROFILE_PICTURE_LINK,
  USER_COMPANY,
  USER_INTRO,
  USER_NAME,
  USER_ROLE,
} from "../utils/constants";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="px-10 py-11 h-screen bg-gradient-to-r from-yellow-500 to-40">
      <div className="flex items-center justify-between">
        <div className="w-[45%]">
          <img
            className="rounded-3xl shadow-lg w-[80%] h-[35rem] object-cover"
            src={PROFILE_PICTURE_LINK}
            alt="Users' profile picture"
          />
        </div>
        <div className="w-[50%]">
          <div className="font-bold uppercase py-5">
            <h1 className="text-4xl">
              - I'm <span className="text-yellow-500">{USER_NAME}</span>.
            </h1>
            <h1 className="text-lg">
              {USER_ROLE} at {USER_COMPANY}
            </h1>
          </div>
          <div className="w-[90%]">
            <p>{USER_INTRO}</p>
            <div className="flex items-center pt-10">
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
