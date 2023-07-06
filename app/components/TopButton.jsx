"use client"

import { useEffect, useState } from "react"
import { BsFillArrowUpSquareFill } from "react-icons/bs"

const TopButton = () => {

    const [scrolling, setScrolling] = useState(false)

    useEffect(() => {
        const handlerScroll = () => {
            if (window.scrollY > 300) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }

        window.addEventListener("scroll", handlerScroll)

        return () => {
            window.removeEventListener("scroll", handlerScroll)
        }
    }, [])

    return (
        <div className={scrolling ? "top-button active" : "top-button"}>
            <svg width="0" height="0">
                <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#3f5efb" offset="0%" />
                    <stop stopColor="#fc466b" offset="100%" />
                </linearGradient>
            </svg>
            <a href="#home">
                <BsFillArrowUpSquareFill size={40} style={{ fill: "url(#gradient)" }} />
            </a>
        </div>
    )
}

export default TopButton