import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useRef, useState } from "react";

const Contact = () => {

  const form = useRef();

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_osc4e2a', 'template_shqxbz8', form.current, 'CPeQzEFGattc8V4eg')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className="contact-form" id="Contact">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            {/* darkMode */}
            <span>Get in Touch</span>
            <span>Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* right side form */}
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="user" placeholder="Name" />
            <input type="email" name="user_email" className="user" placeholder="Email" />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="Send" className="button contact-btn" />
            <span>{done && "Thanks for contacting me. I will give you the feedback"}</span>
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Contact