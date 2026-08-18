import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import "./Projects.css";

function ProjectCard({ project }) {
  return (
    <Link
      className="project-card"
      to={`/proyectos/${project.id}`}
      target="_blank"
      rel="noreferrer"
    >
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <ul className="project-card__tech">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </Link>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section__heading">Proyectos</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
