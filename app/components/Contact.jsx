"use client";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d9vl9qb", "template_hxskypd", form.current, "5elsV7BA7GPK6aKUY")
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="contact" className="contact" ref={ref}>
      <div className="contact-container">
        <div
          className="contact-text"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h1>
            Let&apos;s Chat. <br /> Tell me about your project.
          </h1>
          <span>Let&apos;s create something together ✨</span>
        </div>
        <form
          className="w-full"
          ref={form}
          onSubmit={sendEmail}
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="form-heading">
            <h1 className="text-2xl">Send me a message</h1>
            <span>🚀</span>
          </div>
          <label htmlFor="name">Name:</label>
          <input className="text-black" type="text" id="name" name="name" placeholder="Enter your name" required />
          <label htmlFor="email">Email:</label>
          <input className="text-black" type="email" id="email" name="email" placeholder="Enter your email" required />
          <label htmlFor="reason">Reason:</label>
          <textarea className="text-black" id="reason" name="reason" placeholder="Reason for contact" required></textarea>
            <button className='nav-btn border-none py-2 px-8 tracking-widest cursor-pointer rounded-[20px] hover:scale-105 duration-300' value="Send" type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;