"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import Dev from '../../public/Me.jpg'
import useTypingEffect from '../hooks/useTypingEffect'
import { motion, useInView } from 'framer-motion'

const Hero = () => {
    const phrases = ['Full-Stack Developer', 'React.js Developer', 'Next.js Developer']
    const text = useTypingEffect(phrases)
    const ref = useRef()
    const isInView = useInView(ref, { once: true })
    return (
        <div className="hero w-full h-screen  overflow-hidden" ref={ref}>
            <div className="hero-container w-[89%] h-full m-auto flex items-center justify-between max-w-[1500px]">
                <div className="hero-heading" style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
                }}>
                    <h1 className="text-[70px] font-bold tracking-[1px]">Hello, I&apos;m Dima <br /> a <span className="text-[70px]">{text}</span></h1>
                    <div className="hero-buttons flex items-center gap-4 mt-6">
                        <motion.a whileHover={{ scale: 1.1 }} onHoverStart={(e) => { }} onHoverEnd={(e) => { }} href="#contact">
                            <button className='py-2 px-8 outline-none border-none bg-black text-slate-50 rounded-[30px]  cursor-pointer '>Contact</button>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} onHoverStart={(e) => { }} onHoverEnd={(e) => { }} href='#projects'>
                            <button className="py-2 px-8 outline-none border-none bg-black text-slate-50 rounded-[30px]  cursor-pointer">Projects</button>
                        </motion.a>
                    </div>
                    <div className="hero-socials flex gap-6 mt-6">
                        <Link className="hero-socials-a" href="https://github.com/dimadeloseros1" target='_blank'><AiOutlineGithub /></Link>
                        <Link className="hero-socials-a" href="https://github.com/dimadeloseros1" target='_blank'><AiFillTwitterCircle /></Link>
                        <Link className="hero-socials-a" href="https://www.linkedin.com/in/dmytro-de-los-eros-shakhray/" target='_blank'><AiFillLinkedin /></Link>
                    </div>
                </div>
                <div className="hero-image overflow-hidden rounded-[50%] bg-gradient-to-r from-blue-600 to-pink-700 p-[10px] flex justify-self-end w-[400px] h-[400px]" style={{
                    transform: isInView ? "none" : "translateX(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                }}>
                    <Image className="w-full h-full object-cover rounded-[50%]" src={Dev} alt='' height={0} width={0} />
                </div>
            </div>
        </div>
    )
}

export default Hero