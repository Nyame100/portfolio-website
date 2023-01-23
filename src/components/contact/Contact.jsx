import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ws9p7v6",
        "template_z8j4vsf",
        form.current,
        "_ZOoKj_X6ys0a82Dk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nyamerichmond100@gmail.com</h5>
            <a href="mailto:nyamerichmond100@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <GrLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Nyame Richmond</h5>
            <a href="https://linkedin.com/in/nyame-richmond" target="_blank">
              contact
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
