import "./LandingSection.css";

const LandingSection = () => {
  return (
    <section id="landing">
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li className="nav-link">
              <a data-Scroll href="#landing">
                Home
              </a>
            </li>
            <li className="nav-link">
              <a data-Scroll href="#about">
                About
              </a>
            </li>
            <li className="nav-link">
              <a data-Scroll href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-link">
              <a data-Scroll href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-link contact">
              <a href="mailto:kishankrs21@gmail.com">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>
      <main></main>
    </section>
  );
};

export default LandingSection;
