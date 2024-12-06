import Navbar from "../components/Navbar";
import { ReactComponent as ButtonPlayIcon } from "../image/icon/ButtonPlay.svg";
import { ReactComponent as StarIcon } from "../image/icon/Star.svg";
import NoteImage from "../image/img/note.png";
import HeaderImage from "../image/img/header.png";

export default function Header() {
  return (
    <>
      <div className="bg-[#ECF9FF] py-16">
        <Navbar />
        <div className="container flex items-center justify-between mt-10">
          <div className="w-3/6">
            <div class="relative">
              <div class="absolute -top-4 left-1/4 transform -translate-x-1/2 w-10 h-4 bg-teal-400 rounded-t-full"></div>
              <h1 class="text-[#060640] text-6xl font-bold">
                Perfect place for your business promotion <span>✌️</span>
              </h1>
            </div>
            <p className="text-[#9090A7] py-10 w-96">
              Businesses generally promote their brand, products, and services
              by identifying audience.
            </p>
            <div className="flex items-center gap-10">
              <button className="text-white bg-[#060640] py-4 px-8 rounded-lg hover:bg-white ease-in duration-200 hover:text-black hover:outline hover:outline-1">
                Get Started
              </button>
              <button className="bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg">
                <ButtonPlayIcon className="w-5 h-5 fill-[#00E5CC]" />
              </button>
            </div>
            <div className="mt-10 bg-white py-6 px-5 rounded-xl flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <img src={NoteImage} alt="" />
                <p className="flex items-center gap-1 text-[#060640]">
                  <StarIcon className="w-4 h-4 fill-[#FFBF00]" />
                  4.9
                </p>
              </div>
              <p className="text-[#9090A7] w-96">
                There’s no shortage of ideas, what’s missing is the will to
                execute them – <span className="font-bold">Seth Godin</span>
              </p>
            </div>
          </div>
          <div className="w-5/6">
            <img src={HeaderImage} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
