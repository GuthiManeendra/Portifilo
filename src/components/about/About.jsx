import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="about-card animate-card">
          <h2 className="about-title animate-item delay-1">
            About Me
          </h2>

          <p className="about-text animate-item delay-2">
            I’m a passionate{" "}
            <strong>Python Full Stack Developer (Fresher)</strong> with a strong
            interest in building modern, responsive, and user-friendly web
            applications.
          </p>

          <p className="about-text animate-item delay-3">
            My primary focus is on{" "}
            <strong>full-stack development</strong>, working with frontend
            technologies like HTML, CSS, JavaScript, and React, along with
            backend technologies such as Python, Django, and REST APIs.
          </p>

          <p className="about-text animate-item delay-4">
            As a fresher, I have a strong{" "}
            <strong>learning mindset</strong> and continuously improve my skills
            by building projects, exploring new tools, and following best
            development practices.
          </p>

          <p className="about-highlight animate-item delay-5">
            💡 Actively seeking opportunities to grow as a full stack developer
            and contribute to real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
