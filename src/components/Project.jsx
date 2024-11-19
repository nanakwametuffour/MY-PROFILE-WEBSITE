import React, { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { FaDiagramProject } from "react-icons/fa6";
import { projects } from "../assets/caruselData";
import { Link } from "react-router-dom";

export default function Project() {
 
  const [showAll, setShowAll] = useState(4);


  const slice = projects.projectData.slice(0, showAll);

  const handleLoad = () => {
    setShowAll(showAll + showAll);
  };
  return (
    <section id="projects" className="text-white py-10 w-full h-auto px-1 md:px-2 lg:px-5 border-b border-purple-400">
      <div className="flex flex-col w-full h-auto py-5 gap-5">
        <div className="flex justify-between items-center px-1 md:px-2 lg:px-4">
          <div className="flex items-center gap-2 text-2xl ">
            <h1 className="font-semibold">Project</h1>
            <FaDiagramProject className="text-purple-600" />
          </div>
          <div
            onClick={() => handleLoad()}
            className="flex items-center gap-2 text-2xl border-purple-600 border-b px-2.5 cursor-pointer py-2 rounded-full"
          >
            <span className="">view all</span>
            <ImSpinner9 className="text-purple-600 animate-spin" />
          </div>
        </div>
        <div className="flex flex-col w-full h-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {slice?.map((item) => (
              <div
                key={item.id}
                className="w-full h-[300px] overflow-hidden border border-black/50 rounded-lg"
              >
                <div className=" text-white bg-purple-300 w-full z-10 shadow-sm flex gap-1 opacity-5 px-5 py-2">
                  <span className="w-5 h-5 rounded-full border border-white bg-purple-900"></span>
                  <span className="w-5 h-5 rounded-full border border-white bg-purple-900"></span>
                  <span className="w-5 h-5 rounded-full border border-white bg-purple-900"></span>
                </div>
                <div className="p ">
                  <a href={item.link} target="_blank" rel="norefferrer">
                    <img
                      src={item.img}
                      alt=""
                      className="img w-full h-full object-cover"
                    />
                  </a>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href=""
        
      >
        <button className="text-white  capitalize my-10 w-full flex text-2xl font-semibold justify-center py-3 border border-purple-600 hover:border-purple-800 hover:bg-[#0f0f0fcc] duration-300 cursor-pointer">
          Purchase my services
        </button>
      </a>
    </section>
  );
}
