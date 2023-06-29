"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineGithub, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai"
import Dev from '../../public/Me.jpg'
import useTypingEffect from '../hooks/useTypingEffect'

const Hero = () => {
    const phrases = ['Full-Stack Developer', 'React.js Developer', 'Next.js Developer']
    const text= useTypingEffect(phrases)
    return (
        <div className="hero w-full h-screen bg-white overflow-hidden">
            <div className="hero-container w-[89%] h-full m-auto flex items-center justify-between max-w-[1500px]">
                <div className="hero-heading">
                    <h1 className='text-[70px] font-bold tracking-[1px]'>Hello, I'm Dima <br /> a <span className=' text-[80px]'>{text}</span></h1>
                    <div className="hero-buttons flex items-center gap-4 mt-6">
                        <button className='py-2 px-8 outline-none border-none bg-black text-slate-50 rounded-[30px] hover:bg-slate-600 cursor-pointer transition-all'>Contact</button>
                        <button className='py-2 px-8 outline-none border-none bg-black text-slate-50 rounded-[30px] hover:bg-slate-600 cursor-pointer transition-all'>Projects</button>
                    </div>
                    <div className='hero-socials flex gap-6 mt-6'>
                        <Link className='hero-socials-a' href="https://github.com/dimadeloseros1" target='_blank'><AiOutlineGithub /></Link>
                        <Link className='hero-socials-a' href="https://github.com/dimadeloseros1" target='_blank'><AiFillTwitterCircle /></Link>
                        <Link className='hero-socials-a' href="https://www.linkedin.com/in/dmytro-de-los-eros-shakhray/" target='_blank'><AiFillLinkedin /></Link>
                    </div>
                </div>
                <div className="hero-image overflow-hidden rounded-[50%] bg-gradient-to-r from-blue-600 to-pink-700 p-[10px] flex justify-self-end w-[500px] h-[500px]">
                    <Image className='w-full h-full object-cover rounded-[50%]' src={Dev} alt='' height={0} width={0} />
                </div>
            </div>
        </div>
    )
}

export default Hero