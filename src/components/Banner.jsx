import {
  USER_COMPANY,
  USER_INTRO,
  USER_INTRO_DESC,
  USER_NAME,
  USER_ROLE,
} from "../utils/constants";
import { Link } from "react-router-dom";
import BannerShimmer from "./BannerShimmer";
import { lazy, Suspense } from "react";

const Banner = () => {
  const BannerPhotoLazy = lazy(() => import("./BannerPhoto"));

  return (
    <div className="md:px-10 md:py-7 md:h-screen md:bg-gradient-to-r md:from-yellow-500 md:to-40 max-sm:px-4 pt-6 max-sm:pb-20">
      <div className="md:flex md:items-center md:justify-between">
        <Suspense fallback={<BannerShimmer />}>
          <BannerPhotoLazy />
          {/* <BannerShimmer /> */}
        </Suspense>

        <div className="md:w-[50%] mt-2">
          <div className="font-bold md:py-5 py-2">
            <h1 className="md:text-4xl text-[1.4rem] uppercase">
              - I&apos;m <span className="text-yellow-500">{USER_NAME}</span>.
            </h1>
            <h1 className="md:text-lg max-sm:text-sm capitalize md:pl-[1.40rem] max-sm:pl-3">
              {USER_ROLE}, {USER_COMPANY}
            </h1>
          </div>
          <div className="md:w-[90%] pb-4">
            <p className="pt-2">{USER_INTRO}</p>
            <p className="mt-4">{USER_INTRO_DESC}</p>
            {/* <p className="mt-4">{USER_INTRO_DESC2}</p>
            <p className="mt-4">{USER_INTRO_DESC3}</p> */}
            <div className="md:flex md:items-center md:pt-10 flex justify-center pt-8">
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
