import { ReactComponent as RightIcon } from "../image/icon/right.svg";
import { ReactComponent as LeftIcon } from "../image/icon/left.svg";
import SlidOne from "../image/img/slidone.png";
import SlidTwo from "../image/img/slidtwo.png";
import SlidThree from "../image/img/slidthree.png";
import { useState, useEffect } from "react";

export default function Slid() {
  const [user, setUser] = useState([]);

  async function getUser() {
    const res = await fetch("https://api.github.com/users");
    setUser(await res.json());
  }

  useEffect(() => {
    getUser();
  }, []);

  const slid = [
    {
      image: SlidOne,
      title: "The basic package to start your promotion",
      users: "200K+",
      price: "$89.00",
    },
    {
      image: SlidTwo,
      title: "The standard package to grow your business",
      users: "200K+",
      price: "$89.00",
    },
    {
      image: SlidThree,
      title: "The premium package to boost your promotion",
      users: "200K+",
      price: "$89.00",
    },
  ];

  return (
    <div className="bg-[#ECF9FF] py-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-[#060640] text-4xl font-bold">
            Popular packages
          </h1>
          <div className="flex items-center gap-10 bg-white p-3 rounded-xl">
            <div className="bg-white px-5 py-4 rounded-xl">
              <button>
                <LeftIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="Active bg-[#00E5CC] px-5 py-4 rounded-xl">
              <button>
                <RightIcon className="w-4 h-4 fill-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around py-10">
          {slid.map((i, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 p-4 rounded-lg ${
                index === 1 ? "bg-white shadow-lg" : "border border-white"
              }`}
            >
              <img src={i.image} alt="" className="rounded-lg" />
              <h1 className="text-black font-semibold text-lg w-80">{i.title}</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {user.slice(0, 3).map((i, idx) => (
                    <div
                      key={idx}
                      className={`w-10 h-10 rounded-full overflow-hidden border-2 border-white ${
                        idx !== 0 ? "-ml-4" : ""
                      }`}
                    >
                      <img
                        src={i.avatar_url}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <p className="text-[#9090A7] ml-4">{i.users} users</p>
                </div>
                <p className="text-[#00E5CC]">{i.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
