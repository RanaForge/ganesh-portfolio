// ProjectCard.jsx
// --------------------------------------------------
// This is a reusable component for displaying
// one project in our portfolio.
//
// Instead of creating the same HTML again and again,
// we create ONE ProjectCard component and give it
// different project information using PROPS.
// --------------------------------------------------


function ProjectCard({ title, description, technologies, type, link }) {

  return (

    // Main project card
    <article className="project-card">

      {/* Project type */}
      <p className="project-type">
        {type}
      </p>


      {/* Project title */}
      <h3>
        {title}
      </h3>


      {/* Project description */}
      <p className="project-description">
        {description}
      </p>


      {/* Technologies used in the project */}
      <div className="project-technologies">

        {/*
          technologies is an array.

          .map() creates one technology tag
          for every item in the array.
        */}
        {technologies.map((technology) => (

          <span key={technology}>
            {technology}
          </span>

        ))}

      </div>


      {/* Project button */}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="project-button"
      >
        View Project
      </a>

    </article>
  );
}


// Export the component so that
// Projects.jsx can use <ProjectCard />
export default ProjectCard;