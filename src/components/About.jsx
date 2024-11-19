import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from "framer-motion";
import { FcAbout } from 'react-icons/fc';
export default function About() {
  const picturContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: picturContainerRef,
    offset: ["end end", "start start "],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  return (
    <div className="my-6 text-white w-full px-5 py-5 flex flex-col gap-3 border-b border-purple-300">
      <motion.h1
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
        className="text-2xl text-purple-300 font-semibold flex items-center gap-3"
      >
        About Me
        <FcAbout  className='text-3xl animate-pulse text-purple-300'/>
      </motion.h1>
      <motion.p
        style={{ opacity }}
        ref={picturContainerRef}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="max-w-2xl text-base font-semibold line-clamp-6 lg:line-clamp-9"
      >
        I am a Software Engineer with 3+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem. I have experience working on a variety of projects,
        including building and maintaining single page applications, integrating
        with REST APIs, and implementing responsive design principles. I am also
        proficient in using tools such as Webpack, Turbopack, npm, yarn, pnpm
        and Git for development and deployment. In addition to my technical
        skills, I am a strong communicator and team player. I am able to work
        effectively with cross-functional teams and am comfortable taking on new
        challenges and learning new technologies as needed. I am always looking
        to improve my skills and stay up-to-date with the latest best practices
        in web development. I am excited to continue growing as a developer and
        making meaningful contributions to projects and teams.
      </motion.p>
    </div>
  );
}
