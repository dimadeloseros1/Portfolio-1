import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {AiOutlineGithub, AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-heading">
                    <h1>Hello, I'm Dima <br /> a <span>Developer</span></h1>
                    <div className="hero-buttons">
                        <button>Contact</button>
                        <button>Projects</button>
                    </div>
                    <div className='hero-socials'>
                        <Link href="https://github.com/dimadeloseros1" target='_blank'><AiOutlineGithub /></Link>
                        <Link href="https://github.com/dimadeloseros1" target='_blank'><AiFillTwitterCircle /></Link>
                        <Link href="https://www.linkedin.com/in/dmytro-de-los-eros-shakhray/" target='_blank'><AiFillLinkedin /></Link>
                    </div>
                </div>
                <div className="hero-image">
                    <Image src={me} height={0} width={0} />
                </div>
            </div>
        </div>
    )
}

export default Hero