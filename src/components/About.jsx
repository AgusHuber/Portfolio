import { profile, skills } from "../data/portfolio";
import "./About.css";

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section__heading">Sobre Mi</h2>
      <p className="about__bio">{profile.bio}</p>
      <ul className="about__skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;
