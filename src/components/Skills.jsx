import React from 'react'
import { GiSkills } from 'react-icons/gi';
import { skills } from '../assets/caruselData';

export default function Skills() {
  return (
    <div className="text-purple-300 w-full h-auto py-10 px-1 md:px-5 lg:px-10 border-b border-purple-300">
      <div className="flex flex-col w-full h-auto">
        <div className="flex flex-col w-full gap-5">
          <div className="flex items-center gap-5 text-2xl">
            <h1 className="font-semibold">Skills</h1>
            <GiSkills />
          </div>
          <div className="w-[60%] md:w-[30%] lg:w-[20%] h-auto border-b py-3 border-purple-300">
            <h1 className="text-2xl font-semibold whitespace-nowrap">
              Developer Skills
            </h1>
          </div>
        </div>

        <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 py-5 justify-center items-center">
          {skills?.map((skill) => (
            <div key={skill.id} className="">
              <a
                className="border-b border-purple-600 w-[100%] md:w-[100%]  lg:w-[60%] hover:bg-purple-400 hover:text-black font-semibold duration-300 flex justify-center items-center py-4 rounded-full"
                href={skill.link}
                target="_blank"
                rel="noreferrer"
              >
                {skill.name}
              </a>
            </div>
          ))}
        </div>
        <div className="py-5 w-full h-auto flex flex-col gap-4">
          <div className="w-[80%] md:w-[30%] lg:w-[20%] h-auto border-b py-3 border-purple-300">
            <h1 className="text-2xl font-semibold text-white whitespace-nowrap">
              Developement Skills
            </h1>
          </div>
          <div className="flex w-full flex-col gap-5">
            <div className="flex flex-col justify-start md:flex-row lg:flex-row md:items-center lg:items-center gap-5 group hover:border-b border-purple-300 py-5">
              <div className="text-2xl font-semibold group-hover:underline">
                <h1>Development of front-end </h1>
              </div>
              <div className="px-2">
                <p className="text-base text-white font-normal">
                  With the help of JavaScript frameworks and npm libraries, I am
                  able to build interactive user interfaces.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start md:flex-row lg:flex-row md:items-center lg:items-center gap-5 group hover:border-b border-purple-300 py-5">
              <div className="text-2xl font-semibold group-hover:underline">
                <h1 className="whitespace-nowrap">Backend Development </h1>
              </div>
              <div className="w-full flex items-center px-2">
                <p className="text-base text-white font-normal">
                  I am much more dependent on nodejs, expressjs, firebase,
                  MongoDB.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start md:flex-row lg:flex-row md:items-center lg:items-center gap-5 group hover:border-b border-purple-300 py-5">
              <div className="text-2xl font-semibold group-hover:underline">
                <h1 className="whitespace-nowrap">API development </h1>
              </div>
              <div className="w-full flex items-center px-2">
                <p className="text-base text-white font-normal">
                  Depending on the application architecture, I will create the
                  API. These APIs will perform crucial tasks like fetching data
                  from the server.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start md:flex-row lg:flex-row md:items-center lg:items-center gap-5 group hover:border-b border-purple-300 py-5">
              <div className="text-2xl font-semibold group-hover:underline">
                <h1 className="whitespace-nowrap">Browser compatibility </h1>
              </div>
              <div className="w-full flex items-center px-2">
                <p className="text-base text-white font-normal">
                  Will be supported in all modern browsers like Chrome,
                  Microsoft Edge, Brave, Safari, etc. All the properties will be
                  modified.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start md:flex-row lg:flex-row md:items-center lg:items-center gap-5 group hover:border-b border-purple-300 py-5">
              <div className="text-2xl font-semibold group-hover:underline">
                <h1 className="whitespace-nowrap">Technical requirements </h1>
              </div>
              <div className="w-full flex items-center px-2">
                <p className="text-base text-white font-normal">
                  I am able to build responsive applications that meet customer
                  requirements and keep them engaged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
