import RegisterImage from "../image/img/register.png";

export default function Register() {
  return (
    <div className="bg-white py-20">
      <div className="container">
        <div className="bg-[#ECFDFF] flex items-center justify-around rounded-xl">
          <div className="flex flex-col gap-5">
            <h1 className="text-[#060640] text-5xl font-bold">
              Subscribe newsletter
            </h1>
            <p className="w-[40rem] text-[#9090A7]">
              Businesses generally promote their brand, products, and services
              by identifying audience. No wonder that promotion strategy is one
              of the most important processes in marketing.
            </p>
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter Email address"
                className="bg-white text-black pr-32 pl-10 py-5 w-full rounded-lg"
              />
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-[#060640] py-2 px-4 rounded-lg hover:bg-white ease-in duration-200 hover:text-black hover:outline hover:outline-1">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <img src={RegisterImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
