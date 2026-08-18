import { useParams, Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <section className="section">
        <p>Proyecto no encontrado.</p>
        <Link to="/">← Volver</Link>
      </section>
    );
  }

  return (
    <section className="section project-detail">
      <Link to="/" className="project-detail__back">
        ← Volver
      </Link>
      <h1>{project.title}</h1>
      <p className="project-detail__description">{project.description}</p>
      <ul className="about__skills">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a
        className="button button--primary"
        href={project.github}
        target="_blank"
        rel="noreferrer"
      >
        Ver código en GitHub
      </a>
      <div className="project-detail__screenshots">
        {project.screenshots.map((src) => (
          <img key={src} src={src} alt={project.title} />
        ))}
      </div>
    </section>
  );
}

export default ProjectDetail;
