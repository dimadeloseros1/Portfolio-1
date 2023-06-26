"use client"

import React, { useState } from 'react'

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    
    const menuHandler = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className='p-1 bg-black'>
            <div className=' bg-inherit text-white py-4 w-[89%] m-auto flex items-center justify-between max-w-screen-2xl'>
                <h1 className='p-1 uppercase text-2xl italic'>Dima<span>.com</span></h1>
                <ul className={`nav-menu flex gap-10 ${openMenu ? "nav-menu active" : "nav-menu"}`}>
                    <a className='tracking-widest md:px-1' href=""><li>Home</li></a>
                    <a className='tracking-widest md:px-1' href=""><li>Projects</li></a>
                    <a className='racking-widest md:px-1' href=""><li>About</li></a>
                    <a className='tracking-widest md:px-1' href=""><li>Contact</li></a>
                </ul>
                <div className='flex gap-8'>
                    <button className='nav-btn border-none py-2 px-8 hover:-translate-y-[2px] transition-all tracking-widest cursor-pointer rounded-[20px]'>Hire Me</button>
                    <div onClick={menuHandler} className={`md:hidden ${openMenu ? "hamburger active" : "hamburger"}`}>
                        <span className=' bar bg-white block w-6 h-1 my-[4px] mx-auto transition-all'></span>
                        <span className=' bar bg-white block w-6 h-1 my-[4px] mx-auto transition-all'></span>
                        <span className=' bar bg-white block w-6 h-1 my-[4px] mx-auto transition-all'></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav