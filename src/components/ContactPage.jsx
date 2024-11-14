const ContactPage = () => {
  return (
    <div>
      <p className="pb-4">
        Please feel free to contact me, should you need any additional
        information or clarification. I’m just one text away!
      </p>
      <div className="flex justify-center items-center gap-4 pt-6">
        <a href="https://wa.me/7002609020" target="_blank">
          <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-white flex items-center justify-center md:py-2 pl-4 p-1 cursor-pointer  md:text-2xl  rounded-lg  ">
            WhatsApp!{" "}
            <img
              className="md:w-16 w-12"
              src="./whatsapp.png"
              alt="whatsapp thumbnail"
            />
          </button>
        </a>

        <a href="mailto:sarimullaskar.shl@gmail.com">
          <button className="border border-yellow-500 hover:bg-yellow-500 hover:text-white flex items-center justify-center cursor-pointer max-w-[300px]:mt-3 md:text-2xl md:p-6 p-4 rounded-lg">
            <span className="hidden sm:block">Contact me via </span> Email
          </button>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
