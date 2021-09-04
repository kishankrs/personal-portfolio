import "./LandingSection.css";

const LandingSection = () => {
  return (
    <section>
      <header>
        <nav>
          <ul>
            <li>
              <a data-Scroll href="#landing">
                Home
              </a>
            </li>
            <li>
              <a data-Scroll href="#about">
                About
              </a>
            </li>
            <li>
              <a data-Scroll href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a data-Scroll href="#projects">
                Projects
              </a>
            </li>
            <li>
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
