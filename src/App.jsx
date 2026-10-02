// Import the About component so we can use it in App.jsx.
import About from "./components/About";

// Import the Skills component
import Skills from "./components/Skills";

// Import the Projects component
import Projects from "./components/Projects";

// Import Contact component
import Contact from "./components/Contact";

// useState lets us store whether the mobile menu
// is currently open or closed.
import { useState } from "react";

function App() {

  // Stores whether the mobile navigation menu is open or closed.
  // false = menu closed
  // true = menu open
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">

        {/* Logo */}
        <div className="logo">GANESH</div>

        {/* Navigation links */}
        <div className={`nav-links ${menuOpen ? "menu-open" : ""}`}>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </div>

        {/* Mobile menu button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <p className="greeting">
            Hello, I'm
          </p>

          <h1>
            Ganesh Chandra Rana
          </h1>

          <h2>
            RPA Developer <span>→</span> AI Engineer
          </h2>

          <p className="hero-description">
            I build automation solutions using Automation Anywhere
            and I'm expanding my expertise in Python, Data Science,
            Machine Learning and AI.
          </p>

          <div className="hero-buttons">

          {/* Scroll to the Projects section */}
           <a
             href="#projects"
             className="primary-button"
           >
            View My Projects
           </a>

          {/* Open GitHub profile */}
           <a
            href="https://github.com/RanaForge"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
           >
            GitHub
           </a>

          {/* Download resume */}
           <a
            href="/Ganesh_Chandra_Rana_Resume.pdf"
            download="Ganesh_Chandra_Rana_Resume.pdf"
            className="secondary-button"
           >
            Download Resume
           </a>

         </div>

          <div className="tech-stack">
            <span>Python</span>
            <span>SQL</span>
            <span>AI/ML</span>
            <span>Automation Anywhere</span>
          </div>

        </div>

      </section>

      {/* About section */}
      <About />

      {/* Skills section */}
      <Skills />

      {/* Projects section */}
      <Projects />

      {/* Contact section */}
      <Contact />
      {/* Footer */}
    <footer className="footer">

     <p>
       © 2026 Ganesh Chandra Rana. All rights reserved.
     </p>

     <p>
       RPA Developer → AI Engineer
     </p>

    </footer>
    </div>
  );
}

export default App;