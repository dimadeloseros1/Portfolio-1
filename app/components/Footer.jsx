
import Link from "next/link"
import { AiOutlineGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return (
        <div className="footer bg-black w-full py-4">
            <div className="footer-container w-[89%] m-auto text-white flex items-center justify-center flex-col gap-[10px]">
                <ul className="footer-menu flex gap-[30px]">
                    <Link href="#home">
                        <li>Home</li>
                    </Link>
                    <Link href="#projects">
                        <li>Projects</li>
                    </Link>
                    <Link href="#contact">
                        <li>Contact</li>
                    </Link>
                    <Link href="#about">
                        <li>About</li>
                    </Link>
                </ul>
                <div className="footer-socials flex items-center gap-4">
                    <span className="text-3xl">
                        <Link href="https://github.com/dimadeloseros1" target='_blank'><AiOutlineGithub /></Link>
                    </span>
                    <span className="text-3xl">
                        <Link href="https://www.linkedin.com/in/dmytro-de-los-eros-shakhray/" target='_blank'><AiFillLinkedin /></Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer