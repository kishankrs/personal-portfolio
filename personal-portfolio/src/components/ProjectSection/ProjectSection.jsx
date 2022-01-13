import { useEffect } from "react";
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

import { PROJECTS } from "../../content/data";

import "./ProjectSection.css";

const ProjectSection = () => {
  // gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#proj-heading", {
      scrollTrigger: "#proj-heading",
      opacity: 1,
      duration: 1.5,
      delay: 2.5,
    })
      .from("#proj-heading", {
        x: -100,
        duration: 1.5,
        delay: -1.5,
      })
      .to(".proj-cont", {
        scrollTrigger: ".proj-cont",
        opacity: 1,
        duration: 1.5,
        delay: -1,
      })
      .from(".proj-cont", {
        y: 100,
        duration: 1.5,
        delay: -1.5,
      });
  }, []);

  return (
    <section id="projects" className="projects">
      <header>
        <h2 className="heading" id="proj-heading">
          Projects
        </h2>
      </header>
      <main>
        <article className="proj-cont">
          {PROJECTS.map(({ link, img, title, desc }, i) => (
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={link}
              className="proj"
              key={i}
            >
              <img src={img} alt="Project Thumbnail" className="proj-img" />
              <h3 className="proj-heading orange">{title}</h3>
              <p className="proj-desc">{desc}</p>
            </a>
          ))}
        </article>
      </main>
    </section>
  );
};

export default ProjectSection;
