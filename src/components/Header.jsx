import { i } from 'framer-motion/m';
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';
// import { FaArrowRight } from 'react-icons/fa';
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import {Link}  from 'react-router-dom';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className=" w-full sticky top-10 px-3 md:px-5 lg:px-8 z-50">
      <div className="header     px-2  h-auto mt-5 border-b border-purple-600 ">
        <div className="flex  justify-center items-center max-w-6xl  md:justify-between lg:justify-between mx-auto p-4 md:p-2 lg:p-2">
          <div className="w-full flex items-center ">
            <a href="/">
              <h1 className="text-sm   px-3  border-r border-solid border-purple-800  pl-3 [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)] text-purple-400  md:text-2xl leading-snug font-manrope font-extrabold">
                FrontEndLab
              </h1>
            </a>
          </div>
          <div className="hidden w-full md:flex lg:flex justify-center items-center gap-4">
            <ul className="flex justify-center items-center gap-6 text-xl text-[#eee]">
              <a
                href="/"
                className="cursor-pointer font-semibold text-base hover:text-purple-500"
              >
                Home
              </a>

              <a
                href="#projects"
                className="cursor-pointer font-semibold text-base hover:text-purple-500"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="font-semibold text-base hover:text-purple-500"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="cursor-pointer font-semibold text-base hover:text-purple-500"
              >
                Contact
              </a>
              <a
                href="#hire me"
                className="cursor-pointer font-semibold text-base hover:text-purple-500"
              >
                Hire Me
              </a>

              <a
                href=""
                className="flex items-center gap-3 text-base font-semibold bg-purple-800 px-2 py-2 rounded-lg"
              >
                <span>Enquire</span>
                <FaArrowRight />
              </a>
            </ul>
          </div>
          <HiMiniBars3BottomRight
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl md:hidden lg:hidden"
          />
        </div>
        {isOpen && (
          <div className="w-full h-auto justify-center transition-all duration-300 py-10">
            <ul className="flex flex-col justify-center items-center gap-7 text-base text-[#eee]">
              <a
                href="/"
                className="cursor-pointer font-semibold text-base hover:text-purple-500"
              >
                Home
              </a>
              <a
                href="#projects"
                className="cursor-pointer font-semibold text-base hover:text-purple-500"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="font-semibold text-base hover:text-purple-500"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="cursor-pointer font-semibold text-base hover:text-purple-500"
              >
                Contact
              </a>
              <li
                id=""
                className="cursor-pointer font-semibold text-base hover:text-purple-500"
              >
                Hire Me
              </li>
              <a
                href=""
                className="flex items-center gap-3 text-base font-semibold bg-purple-800 px-2 py-2 rounded-lg"
              >
                <span>Enquire</span>
                <FaArrowRight />
              </a>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
