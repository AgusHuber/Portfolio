import { profile } from "../data/portfolio";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section__heading">Hablemos</h2>
      <p className="contact__text">
        Estoy abierto a oportunidades, colaboraciones o simplemente charlar
        sobre tecnología. Escribime.
      </p>
      <div className="actions">
        <a className="button button--primary" href={`mailto:${profile.email}`}>
          Enviar email
        </a>
        <a
          className="button"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="button"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <footer className="contact__footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </section>
  );
}

export default Contact;
