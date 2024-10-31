import React from "react";

const Contact = () => {
  return (
    <div className="h-screen">
      <h1 className="uppercase font-bold text-4xl flex justify-center mt-20">
        Contact Me
      </h1>
      <div className="flex items-center mt-20">
        <div className="w-[40%] ml-10">
          <h1 className="uppercase font-bold text-3xl mb-3">
            Don't Feel Shy !
          </h1>
          <p className="w-[85%] py-2">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="my-2">
            <span className="uppercase text-gray-500">Address</span>
            <p>Hi-Tech City, Hyderabad, Telangana</p>
          </div>

          <div className="my-2">
            <span className="uppercase text-gray-500">Mail Me</span>{" "}
            <p className="cursor-pointer">sarimullaskar.shl@gmail.com</p>
          </div>
          <div className="my-2">
            <span className="uppercase text-gray-500">Call Me</span>
            <p className="cursor-pointer">+91 7896086210</p>
          </div>
        </div>
        <form className="w-[60%]">
          <input
            type="text"
            className="p-2 border border-gray-500 outline-yellow-500 bg-transparent rounded-2xl w-[43%] mr-4 mb-4"
            placeholder="Enter Your Name"
          />

          <input
            type="text"
            className="p-2 border border-gray-500 outline-yellow-500 bg-transparent rounded-2xl w-[43%] ml-4 mb-4"
            placeholder="Enter Your Email"
          />

          <textarea
            type="text"
            rows={6}
            className="p-2 border border-gray-500 outline-yellow-500 bg-transparent rounded-2xl w-[90%] mb-3"
            placeholder="Enter Your Message"
          ></textarea>
          <input
            type="submit"
            className="font-bold uppercase p-2 border border-yellow-500 rounded-2xl cursor-pointer hover:bg-yellow-500 hover:text-white w-[90%]"
            value={"Submit"}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
