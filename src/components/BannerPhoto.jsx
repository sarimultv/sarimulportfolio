import React from "react";
import { PROFILE_PICTURE_LINK } from "../utils/constants";

const BannerPhoto = () => {
  return (
    <div className="md:w-[45%] flex justify-center py-4">
      <img
        className="md:rounded-3xl md:w-[80%] md:h-[35rem] w-[60%] rounded-full md:border-none border-4 border-gray-800 shadow-lg object-cover"
        src={PROFILE_PICTURE_LINK}
        alt="Users' profile picture"
      />
    </div>
  );
};

export default BannerPhoto;