import GlobalImage from "../image/img/global.png";

export default function Global() {
  return (
    <div className="bg-white py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#060640] text-5xl font-bold">
            Global promotion
          </h1>
          <p className="text-[#9090A7] text-center pt-5 w-[45rem]">
            Businesses generally promote their brand, products, and services by
            identifying audience. No wonder that promotion strategy is one of
            the most important processes in marketing.
          </p>
        </div>
        <div className="py-20">
          <img src={GlobalImage} alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
