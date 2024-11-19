import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "../assets/city1.jpg";
import city2 from "../assets/city2.jpg";
import city3 from "../assets/city3.jpg";
import city4 from "../assets/city4.jpg";
import city5 from "../assets/city5.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [city1, city2, city3, city4, city5];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="flex items-center flex-col justify-center bg-black h-[600px] ">
      <div className="flex flex-col items-center gap-1">
        <motion.h1 
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{
               delay: 0.2,
               y: { type: "spring", stiffness: 60 },
               opacity: { duration: 1 },
               ease: "easeIn",
               duration: 1,
             }}
        className="text-2xl text-[#eee]">how to get started</motion.h1>
        <motion.p 
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{
               delay: 0.4,
               y: { type: "spring", stiffness: 60 },
               opacity: { duration: 1 },
               ease: "easeIn",
               duration: 1,
             }}
        className="text-base text-gray-300">
          Conventional design has been shown the door, <br /> the design you crave has
          just made its appearance
        </motion.p>
         
      </div>
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-lg w-full h-[300px] object-cover "
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="flex flex-row gap-3">
        <button
          className="text-white mt-[400px] bg-purple-800 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          <FaArrowLeft />
        </button>
        <button
          className="text-white mt-[400px] bg-purple-800 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
