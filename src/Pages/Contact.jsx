import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-wrapper">

          {/* CONTACT INFO */}
          <div className="contact-info animate-item delay-1">
            <h2 className="contact-title">Get In Touch</h2>

            <p className="contact-text">
              I’m a motivated <strong>Python Full Stack Developer (Fresher)</strong>{" "}
              who is open to opportunities, collaborations, and learning-driven
              projects. Feel free to reach out using the information below or
              send me a message directly.
            </p>

            <ul className="contact-details">
              <li>
                <span>Email</span>
                <p>maneendraguthi@gmail.com</p>
              </li>

              <li>
                <span>Phone</span>
                <p>+91 6304054870</p>
              </li>

              <li>
                <span>Location</span>
                <p>Chirala,AndhraPradesh</p>
              </li>
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form animate-item delay-2">
            <h3 className="form-title">Send a Message</h3>

            <form>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
