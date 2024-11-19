import React, { useEffect, useState } from 'react'
import { FaEarthAmericas } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'

export default function ViewMore() {
  const [viewmoreDetails, setViewMoreDetails] = useState({})
          
           
 const location = useLocation()
       
        useEffect(()=>{
         setViewMoreDetails(location.state.item);
        }, [])
  return (
    <div className="text-white w-full h-auto py-10 px-5 flex flex-col">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[100%] h-auto px-5 gap-10">
        <div className="w-full h-[300px] overflow-hidden">
          <div className="p">
            <img
              src={viewmoreDetails.img}
              alt={viewmoreDetails.name}
              className="w-full h-full object-cover img"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl font-semibold uppercase">{viewmoreDetails.name}</h1>
            <a href={viewmoreDetails.link} className="underline flex items-center gap-2">
              <FaEarthAmericas/>

              {viewmoreDetails.link}
            </a>
          </div>
          <div className="">
            <p className=" font-light text-base capitalize">{viewmoreDetails.des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
