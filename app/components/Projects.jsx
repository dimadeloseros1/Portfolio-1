"use client";

import Image from "next/image";
import project1 from "../../public/Little-Lemon.png"
import project2 from "../../public/Weather-App.png"
import project3 from "../../public/Pokemon-Finder-Project.png"
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="projects" className="projects">
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#3f5efb" offset="0%" />
          <stop stopColor="#fc466b" offset="100%" />
        </linearGradient>
      </svg>

      <h1 ref={ref}>Projects</h1>
      <div className="projects-container">
        <div
          className="projects-image"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image alt="project" src={project1} width={0} height={0} />
          <a href="https://little-lemon-bice.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
            <div className="technologies -translate-y-80 translate-x-12">
              <h3 className="text-slate-300 text-2xl">Technologies Used</h3>
              <ul className="text-white text-lg">
                <li>React.js</li>
                <li>Css</li>
              </ul>
            </div>
          </a>
        </div>
        <div
          className="projects-image"
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image alt="project" src={project2} width={0} height={0} />
          <a href="https://weather-app-git-main-dimadeloseros1.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
            <div className="technologies -translate-y-80 translate-x-12">
              <h3 className="text-slate-300 text-2xl">Technologies Used</h3>
              <ul className="text-white text-lg">
                <li>Typescript</li>
                <li>Next.js</li>
                <li>Tailwind.Css</li>
              </ul>
            </div>
          </a>
        </div>
        <div
          className="projects-image"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image alt="project" src={project3} width={0} height={0} />
          <a href="https://pokemon-finder-dimadeloseros1.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
            <div className="technologies -translate-y-80 translate-x-12">
              <h3 className="text-slate-300 text-2xl">Technologies Used</h3>
              <ul className="text-white text-lg">
                <li>Typescript</li>
                <li>Next.js</li>
                <li>Tailwind.Css</li>
              </ul>
            </div>
          </a>
        </div>
        <div
          className="projects-image"
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <Image alt="project" src={project2} width={0} height={0} />
          <a href="https://weather-app-git-main-dimadeloseros1.vercel.app/" target="_blank">
            <div className="icon">
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3>Check out Project</h3>
            </div>
            <div className="technologies -translate-y-80 translate-x-12">
              <h3 className="text-2xl text-slate-300">Technologies Used</h3>
              <ul className="text-white text-lg">
                <li>Typescript</li>
                <li>Next.js</li>
                <li>Tailwind.Css</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;