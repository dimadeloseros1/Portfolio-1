import React from 'react'

const Nav = () => {
  return (
    <nav className='p-1 bg-black'>
        <div className=' bg-inherit text-white py-4 w-[89%] m-auto flex items-center justify-between max-w-screen-2xl'>
            <h1 className='p-1 uppercase text-2xl italic'>Dima<span>.com</span></h1>
            <ul className='nav-menu flex gap-10'>
               <a className=' tracking-widest px-1' href=""><li>Home</li></a> 
               <a className=' tracking-widest px-1' href=""><li>Projects</li></a> 
               <a className=' tracking-widest px-1' href=""><li>About</li></a> 
               <a className=' tracking-widest px-1' href=""><li>Contact</li></a> 
            </ul>
            <div className='flex gap-8'>
                <button className='nav-btn border-none py-2 px-8 bg-slate-200 hover:bg-slate-100 tracking-widest cursor-pointer rounded-[20px]'>Hire Me</button>
                <div className='md:hidden'>
                    <span className=' bg-white block w-6 h-1 my-[5px] mx-auto transition-all'></span>
                    <span className=' bg-white block w-6 h-1 my-[5px] mx-auto transition-all'></span>
                    <span className=' bg-white block w-6 h-1 my-[5px] mx-auto transition-all'></span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav