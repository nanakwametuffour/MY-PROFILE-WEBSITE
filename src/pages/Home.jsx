import React from "react";
import Hero from "../components/Hero";
import ImageSlider from "../components/ImageSlider";
import About from "../components/About";
import Carusel from "../components/Carusel";
import Service from "../components/Service";
import Skills from "../components/Skills";
import Experiance from "../components/Experiance";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";

export default function Home() {
  return (
    <div className="w-full py-10 px-8">
      <Hero />
      <About />
      <Carusel />
      <ImageSlider />
      <Service />
      <Experiance />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}