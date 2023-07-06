"use client"

import React, { useRef } from 'react'
import firstPro from '../../public/Little-Lemon.png'
import secondProj from "../../public/Weather-App.png"
import Image from 'next/image'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { useInView } from 'framer-motion'
import Link from 'next/link'

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className='projects w-full h-fit bg-slate-50 pb-8' id='projects' ref={ref}>
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" x2="0%" y2="0%">
          <stop stopColor="#3f5efb" offset="0%" />
          <stop stopColor="#fc466b" offset="100%" />
        </linearGradient>
      </svg>
      <h1 className='text-center w-full uppercase font-bold text-[2rem] my-8 mx-0'>Projects</h1>
      <div className='projects-container w-[89%] m-auto max-w-[1500px] grid md:grid-cols-2 justify-between items-start bg-inherit'>
        <div className="project-image hover:cursor-pointer basis-2/4 overflow-hidden mb-5 mx-3 relative" style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
          <Link href="https://little-lemon-bice.vercel.app/Booking">
            <Image className='cursor-pointer w-full h-auto rounded-2xl hover:brightness-75 transition-all' src={firstPro} alt="first Project" width={0} height={0} />
            <div className='icon absolute opacity-0 transition-all'>
              <BsFillArrowUpRightCircleFill size={100} style={{ fill: "url(#gradient)" }} />
              <h3 className='text-slate-50 font-extrabold'>Check out Project</h3>
            </div>
          </Link>
        </div>
        <div className="project-image hover:cursor-pointer basis-2/4 overflow-hidden mb-5 mx-3 relative" style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
          <Link href="https://weather-app-git-main-dimadeloseros1.vercel.app/">
            <Image className='cursor-pointer w-full h-auto rounded-2xl hover:brightness-75 transition-all' src={secondProj} alt="first Project" width={0} height={0} />
            <div className='icon absolute opacity-0 transition-all'>
              <BsFillArrowUpRightCircleFill style={{ fill: "url(#gradient)" }} size={100} />
              <h3 className='text-slate-50 font-extrabold'>Check out Project</h3>
            </div>
          </Link>
        </div>
        <div className="project-image hover:cursor-pointer basis-2/4 overflow-hidden mb-5 mx-3 relative" style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
          <Image className='cursor-pointer w-full h-auto rounded-2xl hover:brightness-75 transition-all' src={firstPro} alt="first Project" width={0} height={0} />
          <div className='icon absolute opacity-0 transition-all'>
            <BsFillArrowUpRightCircleFill style={{ fill: "url(#gradient)" }} size={100} />
            <h3 className='text-slate-50 font-extrabold'>Check out Project</h3>
          </div>
        </div>
        <div className="project-image hover:cursor-pointer basis-2/4 overflow-hidden mb-5 mx-3 relative" style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
          <Image className='cursor-pointer w-full h-auto rounded-2xl hover:brightness-75 transition-all' src={firstPro} alt="first Project" width={0} height={0} />
          <div className='icon absolute opacity-0 transition-all'>
            <BsFillArrowUpRightCircleFill style={{ fill: "url(#gradient)" }} size={100} />
            <h3 className='text-slate-50 font-extrabold'>Check out Project</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects