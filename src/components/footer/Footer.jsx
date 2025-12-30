import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-card">

        {/* ===== PROFILE ===== */}
        <div className="footer-brand">
          <h3>Guthi Maneendra</h3>
          <span>Python Full-Stack Developer</span>
          <p className="footer-desc">
            Entry-level Python Full-Stack Developer with strong fundamentals in
            frontend and backend technologies. Interested in building scalable
            and maintainable web applications.
          </p>
        </div>

        {/* ===== CORE CONCEPTS ===== */}
        <div className="footer-core">
          <h4>Core Concepts</h4>
          <ul className="core-list">
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div className="footer-contact">
          <p>
            <FaPhoneAlt /> +91 6304053870
          </p>
          <p>
            <FaEnvelope /> maneendraguthi@gmail.com
          </p>

          <div className="footer-social">
            <a
              href="https://github.com/GuthiManeendra"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Guthi Maneendra · React & Vite
      </p>
    </footer>
  );
};

export default Footer;
