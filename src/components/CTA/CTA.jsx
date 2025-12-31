import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card animate-item delay-1">

          <h2 className="cta-title animate-item delay-2">
            Ready to Build Something Great?
          </h2>

          <p className="cta-text animate-item delay-3">
            I’m a motivated <strong>Python Full Stack Developer (Fresher)</strong>{" "}
            who enjoys building clean, scalable, and user-focused web
            applications. I’m actively looking for opportunities to learn,
            grow, and contribute to real-world projects.
          </p>

          <p className="cta-subtext animate-item delay-4">
            Whether you’re a recruiter, hiring manager, or collaborator — let’s
            connect and discuss how I can add value to your team.
          </p>

          <div className="cta-buttons animate-item delay-5">
            <Link to="/contact" className="cta-btn primary">
              Contact Me
            </Link>

            <a href="/Maneendra Guthi.pdf" download className="cta-btn outline">
              Download Resume
            </a>

            <Link to="/projects" className="cta-btn secondary">
              View Projects
            </Link>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
