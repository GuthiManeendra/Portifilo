import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import { Home } from "./Pages/Home";
import Skills from "./components/skills/Skills";
import ProjectsPreview from "./Pages/ProjectsPreview";
import CTA from "./components/CTA/CTA";
import Contact from "./Pages/Contact";


const App = () => {
  return (
    <>
      <Header />
      
      
      
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Future pages */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsPreview />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <CTA/>
      <Footer />
    </>
  );
};

export default App;
