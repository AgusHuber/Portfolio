import { profile } from "../data/portfolio";
import "./Hero.css";

function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero__eyebrow">{profile.role}</p>
      <h1 className="hero__title">{profile.name}</h1>
      <p className="hero__tagline">{profile.tagline}</p>
      <div className="actions">
        <a className="button" href="#projects">
          Ver Proyectos
        </a>
        <a className="button" href="#contact">
          Contactarme
        </a>
      </div>
    </section>
  );
}

export default Hero;
