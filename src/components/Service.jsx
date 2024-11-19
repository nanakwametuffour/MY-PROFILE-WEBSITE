import { FaServicestack } from "react-icons/fa6";
import { workData } from "../assets/caruselData";
import { useState } from "react";
import { p } from "framer-motion/client";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Service() {
  const [vieMore, setViewMore] = useState(true);
  const [project, setProjects] = useState(workData);
  
        
  const handleVieMore = () => {
    console.log('hey there');
    
    
  };
  return (
    <div className="py-10 w-full text-white h-auto">
      <div className="flex flex-col w-full h-auto gap-10 justify-center relative p-5 ">
        <div className="flex items-center text-3xl font-semibold gap-4 ">
          <h1>my services</h1>
          <FaServicestack className="text-purple-400 animate-pulse" />
        </div>
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
          {project?.map((work) => (
             <Card item={work} key={work.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}
