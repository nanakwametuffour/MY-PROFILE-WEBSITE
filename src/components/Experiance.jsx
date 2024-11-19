import React from "react";
import { IoBagSharp } from "react-icons/io5";
import { SiConsul, SiFiverr, SiFreelancer, SiSimilarweb, SiToptal } from "react-icons/si";

export default function Experiance() {
  return (
    <div className=" py-10 px-1 md:px-5 lg:px-10 w-full border-b border-purple-300">
      <div className="flex flex-col w-full h-auto gap-7">
        <h1 className="flex items-center gap-5 text-3xl text-white font-semibold">
          Experiance <IoBagSharp className=" animate-pulse text-purple-300" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-10 lg:gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <div className="w-10 h-10 border rounded-full flex justify-center items-center text-3xl p-2">
                <SiConsul className="text-purple-300" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white font-semibold text-2xl">
                  myCodeEdge.com
                </h1>
                <p className="text-white">Software Engineer 2023 - Present</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-10 h-10 border rounded-full flex justify-center items-center text-3xl p-2">
                <SiFreelancer className="text-purple-300" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white font-semibold text-2xl">
                  Freelancer
                </h1>
                <p className="text-white">MERN Stack Developer 2020 - 2021</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-10 h-10 border rounded-full flex justify-center items-center text-3xl p-2">
                <SiFiverr className="text-purple-300 text-4xl font-bold" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white font-semibold text-2xl">Fiverr</h1>
                <p className="text-white">
                  FrontEnd Stack Developer 2019 - 2020
                </p>
              </div>
            </div>
          </div>
          <div className="text-white flex flex-col w-full gap-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border rounded-full flex justify-center items-center text-3xl p-2">
                <SiSimilarweb className="text-purple-300 text-4xl font-bold" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white font-semibold text-2xl">
                  FrontEndLab.com
                </h1>
                <p className="text-white">CEO 2024 - Present</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border rounded-full flex justify-center items-center text-3xl p-2">
                <SiToptal className="text-purple-300 text-4xl font-bold" />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-white font-semibold text-2xl">Toptal</h1>
                <p className="text-white">
                  MERN Stack Developer 2021 - present
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
