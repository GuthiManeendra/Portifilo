import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-card">
        {/* Brand */}
        <div className="brand">
          <h2>Guthi Maneendra</h2>
          <span>Python Full-Stack Developer</span>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Nav */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink onClick={() => setMenuOpen(false)} to="/" className="link">Home</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/about" className="link">About</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/skills" className="link">Skills</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/projects" className="link">Projects</NavLink>
          <NavLink onClick={() => setMenuOpen(false)} to="/contact" className="link">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
