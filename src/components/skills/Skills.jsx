import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-section py-5">
      <div className="container">
        <h2 className="skills-title animate-item delay-1">
          Skills & Tech Stack
        </h2>

        {/* ================= FRONTEND ================= */}
        <div className="skills-card animate-item delay-2">
          <h4 className="skills-heading">Frontend Development</h4>

          <p className="skills-desc">
            I build responsive and user-friendly interfaces using modern
            frontend technologies. I focus on reusable components, clean layouts,
            and interactive UI experiences.
          </p>

          <div className="skills-list">
            <span className="skill-badge">HTML</span>
            <span className="skill-badge">CSS</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">React</span>
            <span className="skill-badge">Bootstrap</span>
          </div>
        </div>

        {/* ================= BACKEND ================= */}
        <div className="skills-card animate-item delay-3">
          <h4 className="skills-heading">Backend Development</h4>

          <p className="skills-desc">
            I develop backend functionality using Python and Django, focusing on
            RESTful APIs, authentication, and database-driven applications.
          </p>

          <div className="skills-list">
            <span className="skill-badge">Python</span>
            <span className="skill-badge">Django</span>
            <span className="skill-badge">Object-Oriented Programming</span>
            <span className="skill-badge">SQL</span>
          </div>
        </div>

        {/* ================= TOOLS ================= */}
        <div className="skills-card animate-item delay-4">
          <h4 className="skills-heading">Tools & Platforms</h4>

          <p className="skills-desc">
            I use modern development tools for version control, API testing, and
            efficient coding workflows during project development.
          </p>

          <div className="skills-list">
            <span className="skill-badge">Git</span>
            <span className="skill-badge">GitHub</span>
            <span className="skill-badge">VS Code</span>
            <span className="skill-badge">Postman</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
