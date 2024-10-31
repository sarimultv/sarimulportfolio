import { PROFILE_PICTURE_LINK, USER_NAME } from "../utils/constants";

const Banner = () => {
  return (
    <div className="px-10 py-11 h-screen bg-gradient-to-r from-yellow-500 to-50">
      <div className="flex items-center justify-between">
        <div className="w-[45%]">
          <img
            className="rounded-3xl shadow-lg w-[80%] h-[35rem] object-cover"
            src={PROFILE_PICTURE_LINK}
            alt="Users' profile picture"
          />
        </div>
        <div className="w-[50%]">
          <div className="font-bold text-4xl uppercase py-5">
            <h1>- I'm {USER_NAME}.</h1>
            <h1>web designer</h1>
          </div>
          <div className="w-[90%]">
            <p>
              I'm an Indian based web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </p>
            <div className="flex items-center pt-10">
              <button className="font-bold uppercase p-4 border border-yellow-500 rounded-2xl cursor-pointer hover:bg-yellow-500 hover:text-white">
                more about me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
