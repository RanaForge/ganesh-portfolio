// Projects.jsx
// --------------------------------------------------
// This component contains all the projects
// that we want to showcase in our portfolio.
// --------------------------------------------------

// Import the reusable ProjectCard component.
import ProjectCard from "./ProjectCard";

function Projects() {

  // ------------------------------------------------
  // Project data
  //
  // Each object represents one project.
  //
  // Later, we can add more projects to this array
  // without changing the ProjectCard component.
  // ------------------------------------------------

  const projects = [

    // =========================================
    // PROJECT 1
    // Completed AI / Automation project
    // =========================================
    {
      type: "AI / AUTOMATION",

      title: "Healthcare AI Claim Validation",

      description:
        "An AI-powered medical invoice claim validation system built using Automation Anywhere. The solution extracts claim information, validates patient and coverage details, makes decisions, and routes exceptions for human review.",

      technologies: [
        "Automation Anywhere",
        "AI",
        "Excel",
        "Email Automation"
      ],

      // GitHub repository link
      link: "https://github.com/RanaForge/healthcare-ai-claim-validation"
    },


    // =========================================
    // PROJECT 2
    // Data Science / EDA project
    // No Machine Learning
    // =========================================
    {
      type: "DATA SCIENCE",

      title: "Sales Data Analysis & Business Insights",

      description:
        "An exploratory data analysis project that analyzes sales transactions to identify revenue trends, top-performing products, regional performance, customer behavior, and other business insights using Python and data visualization.",

      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn"
      ]
    }

  ];


  return (

    <section id="projects" className="projects-section">

      {/* Section heading */}
      <div className="section-heading">

        <p>MY PROJECTS</p>

        <h2>
          Things I Have Built
        </h2>

      </div>


      {/* Project cards */}
      <div className="projects-grid">

        {/*
          Loop through the projects array.

          For every project, create one
          ProjectCard component.
        */}

        {projects.map((project) => (

          <ProjectCard
            key={project.title}

            type={project.type}

            title={project.title}

            description={project.description}

            technologies={project.technologies}

            // Pass the GitHub link to ProjectCard
            link={project.link}
          />

        ))}

      </div>

    </section>
  );
}


// Export Projects component
export default Projects;