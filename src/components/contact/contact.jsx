import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";
import Walmart from "../../w-assets/walmart.png";
import Adobe from "../../w-assets/adobe.png";
import Microsoft from "../../w-assets/microsoft.png";
import Facebook from "../../w-assets/facebook.png";

import FacebookIcon from "../../w-assets/facebook-icon.png";
import TwitterIcon from "../../w-assets/twitter.png";
import YoutubeIcon from "../../w-assets/youtube.png";
import InstagramIcon from "../../w-assets/instagram.png";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t3e5o9d",
        "template_mcpq2ee",
        form.current,
        "14DZv6fJdUPY7VtjxHiOk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="clientPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="client" className="clientImg" />
          <img src={Adobe} alt="client" className="clientImg" />
          <img src={Microsoft} alt="client" className="clientImg" />
          <img src={Facebook} alt="client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunites.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={InstagramIcon} alt="Twitter" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
