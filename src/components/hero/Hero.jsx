import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center gy-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 text-center text-lg-start">
            <span className="badge hero-badge mb-3">
              Hello, I’m <i className="bi bi-hand-wave wave-icon"></i>
            </span>

            <h1 className="hero-title">Maneendra</h1>

            <h2 className="hero-role">
              Python Full Stack Developer | Web Developer (Fresher)
            </h2>

            <p className="hero-desc">
              I’m a motivated Python Full Stack Developer and Web Developer
              with a strong foundation in building modern, responsive,
              and scalable web applications. I enjoy working across both
              frontend and backend technologies and continuously improving
              my skills through hands-on projects.
            </p>

            {/* TECH STACK */}
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-4">
              {[
                "Python",
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Bootstrap",
                "Tailwind CSS",
                "SQL",
              ].map((tech) => (
                <span key={tech} className="badge tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* ACTION BUTTONS */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
              <Link to="/projects" className="btn btn-primary px-4">
                View Projects
              </Link>

              <Link to="/contact" className="btn btn-outline-primary px-4">
                Contact Me
              </Link>

            
              <a
                href="/Maneendra Guthi.pdf"
                download
                className="btn btn-outline-secondary px-4"
              >
                Download Resume
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="d-flex gap-4 justify-content-center justify-content-lg-start hero-social">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Developer Illustration"
              className="img-fluid hero-img"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
