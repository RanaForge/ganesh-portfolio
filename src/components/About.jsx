// About.jsx
// This component contains the "About Me" section
// of the portfolio website.

function About() {
  return (
    <section id="about" className="about-section">

      {/* Section heading */}
      <div className="section-heading">
        <p>ABOUT ME</p>

        <h2>
          Turning Automation Experience into AI Solutions
        </h2>
      </div>


      {/* Two-column About layout */}
      <div className="about-content">

        {/* =========================
            LEFT SIDE - ABOUT TEXT
        ========================== */}
        <div className="about-text">

          <p>
            I am an RPA Developer with 3+ years of experience
            building and supporting automation solutions using
            Automation Anywhere.
          </p>

          <p>
            My experience includes process automation, web
            automation, SQL, Excel automation, email automation,
            and production support.
          </p>

          <p>
            I am now expanding my expertise in Python,
            Data Science, Machine Learning, and Artificial
            Intelligence as I transition toward AI Engineering.
          </p>

        </div>


        {/* =========================
            RIGHT SIDE - HIGHLIGHTS
        ========================== */}
        <div className="about-highlights">

          {/* Experience card */}
          <div className="highlight-card">

            <h3>3+</h3>

            <p>
              Years Experience
            </p>

          </div>


          {/* RPA card */}
          <div className="highlight-card">

            <h3>RPA</h3>

            <p>
              Automation Development
            </p>

          </div>


          {/* AI/ML card */}
          <div className="highlight-card">

            <h3>AI / ML</h3>

            <p>
              Current Learning Focus
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}


// Export the About component
// so that App.jsx can use <About />
export default About;