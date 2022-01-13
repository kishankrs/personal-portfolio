import { PROJECTS } from "../../content/data";

import "./ProjectSection.css";

const ProjectSection = () => {
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
