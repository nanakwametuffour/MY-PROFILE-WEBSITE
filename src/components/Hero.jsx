import React, { useRef } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaBookOpenReader, FaPhotoFilm } from "react-icons/fa6";
import { PiFlagBannerFoldFill } from "react-icons/pi";
import { useScroll, useTransform, motion } from "framer-motion";
import About from "./About";
export default function Hero() {
  const picturContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: picturContainerRef,
    offset: ["end end", "start start "],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="text-white bg h-full top-0 md:h-[70vh] lg:h-[100%]  w-full relative">
      <div className="w-full h-auto">
        <div className="flex flex-col  md:flex-col lg:flex-row justify-between items-center gap-5 w-full h-full bg-black/50   py-10">
          <div className=" w-full h-auto flex flex-col justify-center">
            <div className="w-[100%] lg:w-[60%] h-[60%] flex flex-col justify-center p-2 items-center gap-2 border-b border-purple-300 pb-4">
              <img
                src="/images/nana.PNG"
                alt=""
                className="w-44 h-44 object-cover  rounded-full border-2 border-purple-300"
              />
              <div className="w-full">
                <div className="flex w-full flex-col justify-center items-center gap-2">
                  <h1 className="font-bold text-2xl"> Nana Kwame Tuffour</h1>
                  <motion.h2
                    style={{ opacity }}
                    ref={picturContainerRef}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      y: { type: "spring", stiffness: 60 },
                      opacity: { duration: 1 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    className="text-purple-300 font-semibold"
                  >
                    Software Engineer
                  </motion.h2>
                </div>
                <motion.p
                  style={{ opacity }}
                  ref={picturContainerRef}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 2 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="text-[#eee] font-bold w-full"
                >
                  I'm a Software Engineer working at myCodeEdge.com. I
                  specialized in Reactjs, React Native, Nextjs, Nodejs,
                  Sanity.io, MongoDB, Tailwindcss, Expo and many more.
                </motion.p>
              </div>
            </div>
          </div>

          <motion.div
            style={{ opacity }}
            ref={picturContainerRef}
            className=" w-full h-auto lg:h-[400px] flex flex-col gap-5 bg-[#1b1919]/70 border rounded-lg border-spacing-1 border-gray-500 px-5 cursor-pointer"
          >
            <div className="flex gap-5 py-5 justify-start border-b border-purple-600">
              <div className="flex gap-1 items-center">
                <div className=" w-3 h-3 rounded-full border"></div>
                <div className=" w-3 h-3 rounded-full border"></div>
                <div className=" w-3 h-3 rounded-full border"></div>
              </div>
              <h2 className="text-sm">FrontEndLab</h2>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row w-full gap-3">
              <div className="shadow bg-[#3333] w-full border-l-2 border-blue-500 p-2">
                <h1>To do</h1>
              </div>
              <div className="shadow bg-[#3333] w-full border-l-2 border-green-500 p-2">
                <h1>In progress</h1>
              </div>
              <div className="shadow bg-[#3333] w-full border-l-2 border-yellow-500 p-2">
                <h1>Approved</h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-[#3333] w-[100%] md:w-[50%] lg:w-[50%] py-1 rounded-lg flex gap-2 items-center pl-2">
                <FaPhotoFilm />

                <h3>Facebook banner</h3>
              </div>
              <div className="bg-[#3333] w-[100%] md:w-[50%] lg:w-[50%] py-1 rounded-lg flex gap-2 items-center pl-2">
                <PiFlagBannerFoldFill />
                <h3>Landing page</h3>
              </div>
              <div className="bg-[#3333] w-[100%] md:w-[50%] lg:w-[50%] py-1 rounded-lg flex gap-2 items-center pl-2">
                <CgWebsite />

                <h3>E-commerce website</h3>
              </div>
              <div className="bg-[#3333] w-[100%] md:w-[50%] lg:w-[50%] py-1 rounded-lg flex gap-2 items-center pl-2">
                <FaBookOpenReader />
                <h3>LMS website</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
