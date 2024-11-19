import React from "react";
import { icons } from "../assets/caruselData";
import { motion } from "framer-motion";
export default function Carusel() {
  return (
    <div className=" container mx-auto py-5 overflow-x-hidden">
        <div className="flex opacity-10">
          <motion.div
          initial={{x: 0}}
          animate={{x: "-100%"}}
          transition={{duration: 30, repeat: Infinity, ease: "linear"}}
           className="flex flex-shrink-0 gap-7">
            {
              icons?.map((icon, i)=>{

                return (
                  <div
                      key={i}
                    className="flex items-center py-5 justify-center  w-24 h-24 rounded-lg overflow-hidden"
                  >
                    <img
                      src={icon.image}
                      alt=""
                      className="w-16 h-16 object-cover"
                     
                    />
                  </div>
                );
              })
            }
          </motion.div>
          <motion.div
          initial={{x: 0}}
          animate={{x: "-100%"}}
          transition={{duration: 30, repeat: Infinity, ease: "linear"}}
           className="flex flex-shrink-0 gap-7">
            {
              icons?.map((icon, index)=>{

                return (
                  <div
                    key={index}
                    className="flex items-center py-5 justify-center  w-24 h-24 rounded-lg overflow-hidden"
                  >
                    <img
                      src={icon.image}
                      alt=""
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                );
              })
            }
          </motion.div>

        </div>
        
    </div>
  );
}
