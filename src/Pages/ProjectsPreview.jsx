import React from "react";
import "../Styles/ProjectsPreview.css";

const projects = [
  {
    title: "Travel Booking Web App",
    description:
      "Full-stack travel booking platform with tour listings, user authentication, bookings, and reviews.",
    tech: ["React", "Python", "Django", "SQL"],
    github: "https://github.com/your-username/travel-booking-app",
    // live: "https://travel-booking-demo.netlify.app",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive portfolio website to showcase skills, projects, and resume using modern UI principles.",
    tech: ["React", "CSS", "Bootstrap"],
    github: "https://github.com/GuthiManeendra/Portifilo.git",
    // live: "https://your-portfolio.netlify.app",
  },
  {
    title: "Authentication System",
    description:
      "Secure login and registration system with REST APIs and database integration.",
    tech: ["Python", "Django", "SQL"],
    github: "https://github.com/your-username/auth-system",
    // live: "#",
  },
];

const ProjectsPreview = () => {
  return (
    <section className="projects-section py-5">
      <div className="container">
        <h2 className="projects-title animate-item delay-1">
          Projects (Preview)
        </h2>

        <p className="projects-subtitle animate-item delay-2">
          A few selected projects that demonstrate my full stack development
          skills.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card animate-item delay-${index + 3}`}
            >
              <h4 className="project-title">{project.title}</h4>

              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn outline"
                >
                  GitHub
                </a>

                {/* {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn primary"
                  >
                    Live Demo
                  </a>
                )} */}
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer animate-item delay-6">
          <a href="/projects" className="project-btn primary">
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
