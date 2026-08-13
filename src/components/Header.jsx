import { profile } from "../data/portfolio";
import "./Header.css";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

function Header() {
  return (
    <header className="header">
      <a href="#top" className="header__brand">
        {profile.name}
      </a>
      <nav className="header__nav">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
