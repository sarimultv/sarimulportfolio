const Contact = () => {
  const handleFormData = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="md:h-screen pb-2">
      <h1 className="uppercase font-bold text-4xl flex justify-center md:mt-20 pt-6">
        Contact <span className="text-yellow-500">Me</span>
      </h1>
      <div className="md:flex md:items-center md:mt-20 mt-6 p-2">
        <div className="md:w-[40%] md:ml-10">
          <h1 className="uppercase font-bold text-3xl mb-3">
            Don't Feel Shy !
          </h1>
          <p className="w-[85%] py-2">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="md:my-2 my-3 flex gap-2 items-center">
            <span className="uppercase text-gray-500">Address</span>
            <p>Hi-Tech City, Hyderabad, Telangana</p>
          </div>

          <div className="my-2 flex gap-2 items-center">
            <span className="uppercase text-gray-500">Mail Me</span>{" "}
            <p className="cursor-pointer">sarimullaskar.shl@gmail.com</p>
          </div>
          <div className="my-2 flex gap-2 items-center">
            <span className="uppercase text-gray-500">Call Me</span>
            <p className="cursor-pointer">+91 7896086210</p>
          </div>
        </div>
        <form className="md:w-[60%] pt-4" onSubmit={handleFormData}>
          <input
            type="text"
            className="p-2 border border-gray-500 outline-yellow-500 bg-transparent rounded-2xl md:w-[43%] w-[100%] md:mr-4 md:mb-4 mb-2"
            placeholder="Enter Your Name"
          />

          <input
            type="email"
            className="p-2 border border-gray-500 outline-yellow-500 bg-transparent rounded-2xl md:w-[43%] w-[100%] md:ml-4 md:mb-4 mb-2"
            placeholder="Enter Your Email"
          />

          <textarea
            type="text"
            rows={6}
            className="p-2 border border-gray-500 outline-yellow-500 bg-transparent rounded-2xl md:w-[90%] w-[100%] md:mb-3"
            placeholder="Enter Your Message"
          ></textarea>
          <input
            type="submit"
            className="font-bold uppercase p-2 border border-yellow-500 rounded-2xl cursor-pointer hover:bg-yellow-500 hover:text-white md:w-[90%] w-[100%]"
            value={"Submit"}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
