import { ReactComponent as ShieldIcon } from "../image/icon/shield.svg";
import { ReactComponent as TeamIcon } from "../image/icon/team.svg";
import AboutImage from "../image/img/about.png";

export default function About() {
  return (
    <div className="bg-white">
      <div className="container flex items-center">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-[#060640] text-5xl font-semibold">About us</h1>
          <p className="text-[#9090A7] pr-20">
            No wonder that promotion strategy is one of the most important
            processes in marketing. In fact, it supports your marketing voices
            to reach your target audience, creates interest, and helps you to
            engage with them.
          </p>
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
              <div>
                <ShieldIcon />
              </div>
              <div>
                <h1 className="text-[#060640] font-semibold text-xl">
                  Safe and secured
                </h1>
                <p className="text-[#9090A7] pr-80">
                  Safe and secured promotion strategy is one of the most
                  important processes in marketing.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <TeamIcon />
              </div>
              <div>
                <h1 className="text-[#060640] font-semibold text-xl">
                  Highly expert team
                </h1>
                <p className="text-[#9090A7] pr-80">
                  We supports your marketing voices to reach your target
                  audience, creates interest.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img src={AboutImage} alt="" />
        </div>
      </div>
    </div>
  );
}
