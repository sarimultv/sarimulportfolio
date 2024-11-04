import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <div className="md:h-screen md:w-screen pb-2">
      <h1 className="uppercase font-bold text-4xl flex justify-center md:mt-20 pt-6">
        About <span className="text-yellow-500">Me</span>
      </h1>
      <div className="md:flex md:items-center md:mt-20 md:ml-20 mt-4">
        <div className="md:w-[50%] md:mr-10 p-2">
          <h1 className="uppercase font-bold text-2xl mb-4">Personal Info</h1>
          <div className="md:flex md:items-center mb-4">
            <div className="md:mr-2">
              <p className="mb-2 flex items-center gap-2">
                <span className="text-gray-500">First Name: </span> Sarimul
              </p>

              <p className="mb-2 flex items-center gap-2">
                <span className="text-gray-500">Middle Name: </span>
                <span>Hoque</span>
              </p>

              <p className="mb-2 flex items-center gap-2">
                <span className="text-gray-500">Last Name: </span>{" "}
                <span>Laskar</span>
              </p>

              <p className="flex items-center gap-2">
                <span className="text-gray-500">Nationality: </span>
                <span>Indian</span>
              </p>
            </div>
            <div className="md:ml-10">
              <p className="mb-2 flex items-center gap-2">
                <span className="text-gray-500">Email: </span>
                <span>sarimullaskar.sh@gmail.com</span>
              </p>
              <p className="mb-2 flex items-center gap-2">
                <span className="text-gray-500">Phone: </span>
                <span>+91 7896086210</span>
              </p>
              <p className="mb-2 flex items-center gap-2">
                <span className="text-gray-500">Languages: </span>
                <span>English, Bengali, Hindi</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-gray-500">Github: </span>
                <span>sarimultv</span>
              </p>
            </div>
          </div>
          <div className="p-2 flex items-center justify-center cursor-pointer border border-yellow-500 hover:bg-yellow-500 hover:text-white ">
            <input
              className="font-bold uppercase p-2 cursor-pointer"
              type="button"
              value={"Download CV"}
            />
            <FaDownload />
          </div>
        </div>
        <div className="md:w-[50%] p-2 flex items-center justify-center flex-wrap">
          <div className="border border-gray-500 rounded-lg p-4 m-2 w-[45%] h-[10rem]">
            <p className="text-4xl font-bold my-2 text-yellow-500">
              4<sup>+</sup>
            </p>
            <hr />
            <p className="uppercase my-2">Years of Experience</p>
          </div>
          <div className="border border-gray-500 rounded-lg p-4 m-2 w-[45%] h-[10rem]">
            <p className="text-4xl font-bold my-2 text-yellow-500">
              3<sup>+</sup>
            </p>
            <hr />
            <p className="uppercase my-2">Completed Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
