"use client"
import { useRef } from 'react'
import emailjs from "@emailjs/browser"

const Contact = () => {
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
    <div className="contact bg-black w-full">
      <div className="contact-container bg-inherit w-[89%] m-auto py-8 text-slate-50 flex justify-between items-center max-w-[1500px]">
        <div className="contact-text">
          <h1 className='text-[50px]'>Let's Chat. <br /> Tell me about your project</h1>
          <span className='text-xl'>Let's create something together!✨</span>
        </div>
        <form ref={form} onSubmit={sendEmail} className='max-w-[400px]'>
          <div className="form-heading flex gap-[5px] items-center justify-center">
            <h1 className='mb-[10px]'>Send me a message</h1>
            <span className=' text-3xl mb-[10px]'>🚀</span>
          </div>
          <label htmlFor="name">Name:</label>
          <input type="text" name='user_name' required className='py-[0.3rem] bg-sky-100'/>
          <label htmlFor="name">Email:</label>
          <input type="text" name='user_email' required className='py-[0.3rem] bg-sky-100'/>
          <label htmlFor="name">Reason:</label>
          <textarea name="message" required className=' h-[100px] bg-sky-100'></textarea>
          <button type='submit' value="Send" className='border bg-slate-100 text-black  '>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact