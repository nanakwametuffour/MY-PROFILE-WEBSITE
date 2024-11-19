import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Card({item}) {
    const navigation = useNavigate();
        const id = item.name;
        const idString = (_id) => {
          return String(_id).toLocaleLowerCase().split(" ").join("");
        };
        const rootId = String(id);
        console.log(rootId);
          
    const handleVieMore =()=>{
        navigation(`/viewmore/${rootId}`,{
            state:{
                item: item
            }
        })

        
    }
    
  return (
    <div className=''>
      <div
        key={item.id}
        className="w-full  bg-[#1b1919]/70 border-4 border-purple-400 rounded-lg hover:border-transparent cursor-pointer hover:rounded-none duration-300"
      >
        <div className="flex flex-col group w-full h-[340px] py-5 gap-8 group px-4">
          <div
            onClick={handleVieMore}
            className="flex flex-col gap-7 justify-start px-4 w-full"
          >
            <h1>{item.name}</h1>
            <p>{item.des}</p>
          </div>
          <Link className="flex items-center w-[140px] gap-2 relative overflow-hidden group px-3">
            <button
              className=" w-full h-full
                  md:left-0 md:-translate-x-[100%]
                  md:group-hover:-translate-x-[17%] transition-transform
                  duration-700 text-purple-400 whitespace-nowrap"
            >
              view more
            </button>
            <div className=" bg-purple-300 w-[40px] lg:w-full h-[2px] inline-flex absolute bottom-0 -right-2 md:left-0 top-[50%] translate-y-[50%] md:translate-y-[60%] lg:-translate-x-[70%] md:group-hover:translate-x-[98px] transition-transform duration-700"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
