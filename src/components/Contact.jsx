import React, { useState } from "react";
import { links } from "../assets/caruselData";
import { a } from "framer-motion/client";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaGithub, FaLocationDot, FaPhone, FaVoicemail, FaX } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaMedium } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";
import GetInTouch from "./GetInTouch";

export default function Contact() {
  const [contact, setContact] = useState(false);
  return (
    <div className="text-white py-10 px-8 w-full h-auto flex flex-col">
      <div className="flex justify-center w-full">
        {!contact ? (
          <div className="flex flex-col w-full h-auto justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center w-full gap-3">
              <h1 className="text-2xl font-semibold">
                Let's create awesome products!
              </h1>
              <p className="text-base font-semibold">
                I am always open to discussing your project, improving your
                online presence, or
              </p>
              <span className="text-base font-semibold">
                helping with Your website's design and converting challenges.
              </span>
            </div>
            <button
              onClick={() => setContact(!contact)}
              className=" border-b border-purple-600 text-2xl font-semibold w-[100%] md:w-[100%] lg:w-[40%] h-14 rounded-full"
            >
              Contact Me
            </button>
            <div className="w-full h-auto flex justify-center py-5 gap-5">
              {links?.map((item) => (
                <a
                  key={item.id}
                  href=""
                  className="text-purple-100 flex  text-2xl relative  items-center group gap-2 "
                >
                  <span>{item.link}</span>
                  <CiLocationArrow1 className=" group-hover:translate-x-2 group-hover:-translate-y-2 transition-translate duration-300 text-purple-700" />
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full">
            <div className="py-5 w-full h-auto  flex flex-col gap-4 justify-center items-center relative">
              <div className="w-full h-full flex justify-center relative">
                <button className="border-purple-400 text-white  w-72 h-20 uppercase border-4 font-bold text-3xl tracking-[1px] relative ">
                  Get in touch
                </button>
                <span className="border-t-purple-400 w-0 h-0 border border-l-[8px] border-t-[12px] border-r-[8px] border-transparent  absolute -bottom-3 "></span>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-4 items-center py-6">
                <div className="w-[240px] h-[140px] flex flex-col gap-3 group">
                  <FaLocationDot
                    className="text-4xl text-purple-600 "
                    width={"1rem"}
                    height={"1rem"}
                  />
                  <h1 className="border-b-purple-400 text-2xl font-semibold tracking-wide border-b-[1px]">
                    Address
                  </h1>
                  <span className="flex items-center gap-2">
                    AG-0750-6385 <span>kumasi / Ghana</span>
                  </span>
                </div>
                <div className="w-[240px] h-[140px] flex flex-col gap-3 group">
                  <FaPhone className="text-4xl text-purple-600" />
                  <h1 className="border-b-purple-400 text-2xl font-semibold tracking-wide border-b-[1px]">
                    Phone Number
                  </h1>
                  <span>+233535949011</span>
                </div>
                <div className="w-[240px] h-[140px] flex flex-col gap-3 group">
                  <AiOutlineMail className="text-4xl text-purple-600" />
                  <h1 className="border-b-purple-400 text-2xl font-semibold tracking-wide border-b-[1px]">
                    Email
                  </h1>
                  <span>nanakwametuffour44@gmail.com</span>
                </div>
                <div className="w-[240px] h-[140px] flex flex-col gap-3 group ">
                  <BiLogoMediumOld className="text-4xl text-purple-600" />
                  <h1 className="border-b-purple-400 text-2xl  font-semibold tracking-wide border-b-[1px]">
                    Medium
                  </h1>
                  <div className="text-2xl flex gap-4">
                    <FaLinkedin className=" hover:text-purple-500 text-purple-600 w-8 h-8 border-[1px] rounded-full inline-flex justify-center items-center hover:cursor-pointer duration-300" />
                    <FaX className="hover:text-purple-500 text-purple-600 w-8 h-8 border-[1px] rounded-full inline-flex justify-center items-center hover:cursor-pointer duration-300" />
                    <FaGithub className="hover:text-purple-500 text-purple-600 w-8 h-8 border-[1px] rounded-full inline-flex justify-center items-center hover:cursor-pointer duration-300" />
                  </div>
                </div>
              </div>
            </div>
            <GetInTouch/>
          </div>
        )}
      </div>
    </div>
  );
}
