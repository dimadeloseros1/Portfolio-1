"use client"

import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

const Divider = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="diver w-full bg-black" ref={ref}>
            <div className="divider-container gap-8 items-center text-center flex-col bg-inherit flex md:flex-row w-[89%] md:m-auto bg-blue-600 md:justify-between py-12 max-w-[1500px]" style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <div>
                    <h1 className='text-2xl font-bold'>Projects Done</h1>
                    <span className='text-5xl text-slate-50'>15+</span>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Experience</h1>
                    <span className='text-5xl text-slate-50'>1+</span>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Clients Satisfaction</h1>
                    <span className='text-5xl text-slate-50'>100%</span>
                </div>
            </div>
        </div>
    )
}

export default Divider