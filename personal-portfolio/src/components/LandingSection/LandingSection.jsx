import LandingIl from "../../assets/vectors/landingil.svg";

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
      <main className="landing">
        <article>
          <h2 className="main-Heading">
            Hey, I am <span className="orange"> Kishan</span>
          </h2>
          <h3 className="sub-heading">
            I am an <span className="green">Embedded Systems Engineer</span>
          </h3>
        </article>
        <img
          src={LandingIl}
          alt="Landing Illustration"
          className="landing-il"
        />
        <a data-scroll href="#projects" className="chevron">
          <div className="mouse_scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </a>
      </main>
    </section>
  );
};

export default LandingSection;
