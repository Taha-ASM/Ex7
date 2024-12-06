import { ReactComponent as BoxIcon } from "../image/icon/Box.svg";
import { ReactComponent as CheckIcon } from "../image/icon/Check.svg";
import { ReactComponent as tradingUpIcon } from "../image/icon/tradingUp.svg";

export default function Section() {
  const steps = [
    {
      icon: BoxIcon,
      title: "Choose packages",
      text: "Businesses generally promote their brand, products, and services by identifying audience or users.",
    },
    {
      icon: CheckIcon,
      title: "Schedule appointment",
      text: "When you have important information to pass onto your people, text messaging can be a great way to do it.",
    },
    {
      icon: tradingUpIcon,
      title: "Grow together",
      text: "Texting can sometimes come across as an impersonal way to communicate, it can be highly beneficial.",
    },
  ];
  return (
    <div className="bg-white py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#060640] text-5xl font-bold">How it works</h1>
          <p className="text-[#9090A7] text-center pt-5 w-96">
            Businesses generally promote their brand, products, and services by
            identifying audience.
          </p>
        </div>
        <div className="py-20">
          <div className="flex gap-10">
            {steps.map((i) => (
              <div className="border px-10 py-16 rounded-xl flex flex-col gap-3 shadow-lg">
                <div className="bg-[#ECF9FF] w-14 h-14 flex items-center justify-center rounded-xl">
                  <i.icon className="w7 h-7" />
                </div>
                <h1 className="text-[#060640] text-3xl font-semibold pt-5">
                  {i.title}
                </h1>
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
