import { useEffect } from "react";

import gsap from "gsap";
import LandingIl from "../../assets/vectors/landingil.svg";

import "./LandingSection.css";

const LandingSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".main-heading", { opacity: 1, duration: 1.5 })
      .from(".main-heading", {
        x: -100,
        duration: 1.5,
        delay: -1.5,
      })
      .to(".sub-heading", {
        opacity: 1,
        duration: 1.5,
        delay: -1,
      })
      .from(".sub-heading", {
        x: -100,
        duration: 1.5,
        delay: -1.5,
      })
      .to(".landing-il", {
        opacity: 1,
        duration: 1.5,
        delay: -1,
      })
      .from(".landing-il", {
        y: 100,
        duration: 1.5,
        delay: -1.5,
      })
      .to(".navbar", {
        opacity: 1,
        duration: 1.5,
        delay: -1,
      });
  }, []);

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
          <h2 className="main-heading">
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
