"use client"

import { useRef } from 'react'
import emailjs from "@emailjs/browser"
import { useInView } from 'framer-motion'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_d9vl9qb", "template_hxskypd", form.current, "5elsV7BA7GPK6aKUY")
      .then((result) => {
        console.log(result.text);
        form.current.reset()
      }, (error) => {
        console.log(error.text)
      })
  }
  return (
    <div className="contact bg-black w-full" id='contact' ref={ref}>
      <div className="contact-container bg-inherit w-[89%] m-auto py-8 flex justify-between items-center max-w-[1500px]">
        <div className="contact-text" style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
          <h1 className='text-[50px] text-white'>Let's Chat. <br /> Tell me about your project</h1>
          <span className='text-xl text-white'>Let's create something together!✨</span>
        </div>
        <form ref={form} onSubmit={sendEmail} className='max-w-[400px] w-[20rem]' style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
          <div className="form-heading flex gap-[5px] items-center justify-center">
            <h1 className='mb-[10px] text-3xl md:text-2xl'>Send me a message</h1>
            <span className=' text-3xl mb-[10px]'>🚀</span>
          </div>
          <label htmlFor="name" className='text-white'>Name:</label>
          <input type="text" name='user_name' placeholder='Enter Your Name' required />
          <label htmlFor="name" className='text-white'>Email:</label>
          <input type="text" name='user_email' placeholder='Enter Your Email' required />
          <label htmlFor="name" className='text-white'>Reason:</label>
          <textarea name="message" required className='h-[100px]' placeholder='Reason for Contact'></textarea>
          <button type='submit' value="Send" className='nav-btn border-none py-2 px-8 hover:scale-105 duration-300 tracking-widest cursor-pointer rounded-[20px] text-white'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact