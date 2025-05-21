import { FiPhoneCall } from "react-icons/fi";

const Contact = () => {
  return (
    <div className=" h-[70vh] flex flex-wrap bg-gray-100">
      <div className="m-auto flex gap-32 justify-center rounded-xl bg-[#734F96] text-white px-10 w-[180vh] h-96">
        <div>
          <img
            src="https://png.pngtree.com/png-clipart/20241102/original/pngtree-cartoon-female-receptionist-at-office-transparent-free-download-png-image_16618771.png"
            alt=""
            className="h-96 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-5xl max-w-2xl font-semibold">24/7 Support</h1>
          <h1 className="text-4xl max-w-2xl font-semibold">
            We Can Help to You Anytime, Anywhere
          </h1>
          <h1 className="text-xl px-6 py-2 bg-white text-black rounded-3xl flex justify-center items-center gap-4">
            {" "}
            <span>
              <FiPhoneCall size={20} />
            </span>
            9800000000{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
