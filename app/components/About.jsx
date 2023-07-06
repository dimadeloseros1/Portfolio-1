"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"


const About = () => {
    const ref = useRef()
    const isInView = useInView(ref, {once: true})

    return (
        <div className="about w-full h-fit py-8" id="about" ref={ref}>
            <h1 className="w-full text-center text-2xl font-bold">About Me</h1>
            <div className="about-container w-[89%] m-auto bg-inherit flex justify-between items-center gap-16 max-w-[1500px] flex-col">
                <div className="about-text" style={{
                transform: isInView ? "none" : "translateY(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                    <p className=" text-xl items-center leading-6 mt-5">
                    I am Dmytro Shakhray, a full-stack developer with a strong passion for coding and problem-solving. With expertise in both front-end and back-end technologies, I enjoy creating efficient and user-friendly web applications. Continuously learning and staying updated, I strive to deliver high-quality software that meets user and business requirements.
                    </p>
                </div>
                <h2 className="w-full text-center text-2xl font-bold">Skills</h2>
                <div className="skills flex flex-wrap items-center justify-center gap-5" style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                    <h3>Javascript</h3>
                    <h3>React.js</h3>
                    <h3>Next.js</h3>
                    <h3>Node.js</h3>
                    <h3>Tailwind.css</h3>
                    <h3>HTML</h3>
                    <h3>CSS</h3>
                    <h3>MongoDB</h3>
                    <h3>PostgreSql</h3>
                    <h3>MySql</h3>
                    <h3>Figma</h3>
                </div>
            </div>
        </div>
    )
}

export default About