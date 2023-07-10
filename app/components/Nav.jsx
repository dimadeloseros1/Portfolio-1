"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        if (openMenu) {
            document.body.classList.add("no-scroll")
        } else {
            document.body.classList.remove("no-scroll")
        }
    }, [openMenu])

    const menuHandler = () => {
        setOpenMenu(!openMenu)
    }

    const closeMenu = () => {
        setOpenMenu(false)
    }

    return (
        <nav className='p-1 bg-black' id='home'>
            <div className='bg-inherit text-white py-4 w-[89%] m-auto flex items-center justify-between max-w-screen-2xl'>
                <h1 className='p-1 uppercase text-2xl italic'>Dima</h1>
                <ul className={`nav-menu flex gap-10 ${openMenu ? "nav-menu active" : "nav-menu"}`}>
                    <a onClick={closeMenu} className='tracking-widest md:px-1' href="#home"><li>Home</li></a>
                    <a onClick={closeMenu} className='tracking-widest md:px-1' href="#projects"><li>Projects</li></a>
                    <a onClick={closeMenu} className='racking-widest md:px-1' href="#about"><li>About</li></a>
                    <a onClick={closeMenu} className='tracking-widest md:px-1' href="#contact"><li>Contact</li></a>
                </ul>
                <div className='flex gap-8'>
                    <motion.a whileHover={{ scale: 1.05 }} onHoverStart={(e) => { }} onHoverEnd={(e) => { }} href='#contact'>
                        <button className='nav-btn border-none py-2 px-8 tracking-widest cursor-pointer rounded-[20px]'>Hire Me</button>
                    </motion.a>
                    <div onClick={menuHandler} className={`md:hidden ${openMenu ? "hamburger active" : "hamburger"}`}>
                        <span className='bar bg-white block w-6 h-1 my-[4px] mx-auto transition-all'></span>
                        <span className='bar bg-white block w-6 h-1 my-[4px] mx-auto transition-all'></span>
                        <span className='bar bg-white block w-6 h-1 my-[4px] mx-auto transition-all'></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav