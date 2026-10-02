// Contact.jsx
// --------------------------------------------------
// This component contains the contact section
// of our portfolio.
//
// Visitors can use this section to find my
// email, GitHub and LinkedIn profiles.
// --------------------------------------------------


function Contact() {

  return (

    <section id="contact" className="contact-section">

      {/* =========================================
          SECTION HEADING
      ========================================== */}

      <div className="section-heading">

        <p>CONTACT</p>

        <h2>
          Let's Connect
        </h2>

      </div>


      {/* =========================================
          CONTACT CONTENT
      ========================================== */}

      <div className="contact-content">

        {/* Introductory message */}
        <div className="contact-text">

          <h3>
            Interested in working together?
          </h3>

          <p>
            I'm always interested in discussing automation,
            data science, AI projects and new opportunities.
          </p>

        </div>


        {/* =========================================
            CONTACT LINKS
        ========================================== */}

        <div className="contact-links">

          {/* Email */}
          <a
            href="mailto:ganeshchandrarana501@gmail.com"
            className="contact-card"
          >

            <span className="contact-label">
              Email
            </span>

            <span className="contact-value">
              ganeshchandrarana501@gmail.com
            </span>

          </a>


          {/* GitHub */}
          <a
            href="https://github.com/RanaForge"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <span className="contact-label">
              GitHub
            </span>

            <span className="contact-value">
              View my GitHub
            </span>

          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gcr501/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <span className="contact-label">
              LinkedIn
            </span>

            <span className="contact-value">
              Connect with me
            </span>

          </a>

        </div>


        {/* Download Resume */}
        <a
            href="/Ganesh_Chandra_Rana_Resume.pdf"
            download
            className="resume-button"
        >
            Download Resume
        </a>

      </div>

    </section>
  );
}


// Export Contact component
export default Contact;