// Skills component
// This component displays the technical skills
// used in the portfolio.

function Skills() {

  // Our skills are stored in an array of objects.
  //
  // Each object represents one skill category.
  // The "items" array contains the skills
  // belonging to that category.
  const skills = [
    {
      category: "Programming",
      items: [
        "Python",
        "SQL",
        "JavaScript"
      ]
    },

    {
      category: "Data Science",
      items: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-learn"
      ]
    },

    {
      category: "AI / Machine Learning",
      items: [
        "Machine Learning",
        "Unsupervised Learning",
        "AI"
      ]
    },

    {
      category: "Automation",
      items: [
        "Automation Anywhere",
        "Web Automation",
        "Excel Automation"
      ]
    },

    {
      category: "Tools",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter"
      ]
    }
  ];


  return (

    // Main Skills section
    <section id="skills" className="skills-section">

      {/* Section heading */}
      <div className="section-heading">

        <p>MY SKILLS</p>

        <h2>
          Technologies I Work With
        </h2>

      </div>


      {/* Skills cards container */}
      <div className="skills-grid">

        {/*
          .map() loops through every object
          inside the "skills" array.

          For every object, React creates
          one skill card.
        */}
        {skills.map((skill) => (

          <div
            className="skill-card"
            key={skill.category}
          >

            {/* Display the category name */}
            <h3>
              {skill.category}
            </h3>


            {/* Display individual skills */}
            <div className="skill-list">

              {/*
                Another .map()

                This time we're looping through
                the items inside the current category.
              */}
              {skill.items.map((item) => (

                <span key={item}>
                  {item}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


// Export Skills so App.jsx can use <Skills />
export default Skills;