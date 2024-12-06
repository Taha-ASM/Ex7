import LogoFooter from "../image/img/LogoFooter.png";
import { ReactComponent as FacebookIcon } from "../image/icon/facebook.svg";
import { ReactComponent as InstagramIcon } from "../image/icon/instagram.svg";
import { ReactComponent as TwitterIcon } from "../image/icon/twitter.svg";
import { ReactComponent as InIcon } from "../image/icon/in.svg";

export default function Footer() {
  return (
    <div className="bg-[#060640]">
      <div className="container px-20 py-20">
        <div className="flex items-center justify-between px-10">
          <div className="flex flex-col gap-5">
            <a href="">
              <img src={LogoFooter} alt="" className="w-40" />
            </a>
            <p className="text-[#9090A7] w-96">
              This is a big one and i consider it one of the most important
              things for a business.
            </p>
            <div className="flex items-center gap-2">
              <button className="border-2 border-[#7C7C7C] w-8 h-8 flex items-center justify-center rounded-full">
                <FacebookIcon className="w-4 h-4 fill-[#7C7C7C]" />
              </button>
              <button className="border-2 border-[#7C7C7C] w-8 h-8 flex items-center justify-center rounded-full">
                <InstagramIcon className="w-4 h-4 fill-[#7C7C7C]" />
              </button>
              <button className="Active border-2 border-[#00E5CC] w-8 h-8 flex items-center justify-center rounded-full">
                <TwitterIcon className="w-4 h-4 fill-[#00E5CC]" />
              </button>
              <button className="border-2 border-[#7C7C7C] w-8 h-8 flex items-center justify-center rounded-full">
                <InIcon className="w-4 h-4 fill-[#7C7C7C]" />
              </button>
            </div>
          </div>
          <div className="flex gap-40">
            <div className="flex flex-col gap-5">
              <h1 className="text-white text-xl font-semibold">Quick Links</h1>
              <ul className="flex flex-col gap-2">
                <a href="">
                  <li>Home</li>
                </a>
                <a href="">
                  <li>About</li>
                </a>
                <a href="">
                  <li>Appointment</li>
                </a>
                <a href="">
                  <li>Blog</li>
                </a>
                <a href="">
                  <li>Contact</li>
                </a>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-white text-xl font-semibold">Company</h1>
              <ul className="flex flex-col gap-2">
                <a href="">
                  <li>About</li>
                </a>
                <a href="">
                  <li>Contact</li>
                </a>
                <a href="">
                  <li>Careers</li>
                </a>
                <a href="">
                  <li>Press</li>
                </a>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-white text-xl font-semibold">Information</h1>
              <ul className="flex flex-col gap-2">
                <a href="">
                  <li>Privacy Policy</li>
                </a>
                <a href="">
                  <li>Terms & Condition</li>
                </a>
                <a href="">
                  <li>FAQ</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000020] flex items-center justify-around py-10">
        <h1>Copyright © 2021 Bizpro</h1>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
}
