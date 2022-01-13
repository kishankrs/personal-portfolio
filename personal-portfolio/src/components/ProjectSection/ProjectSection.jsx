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
          {Array(5)
            .fill(0)
            .map((elem, i) => (
              <a href="http://github.com" className="proj" key={i}>
                <img
                  src="//placehold.it/1000x1000"
                  alt="Project Thumbnail"
                  className="proj-img"
                />
                <h3 className="proj-heading orange">Lorem, ipsum.</h3>
                <p className="proj-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fuga, voluptates quaerat architecto perferendis commodi magni
                  nobis reiciendis non similique ducimus unde quis laborum minus
                  dignissimos! In minima repellendus eos non.
                </p>
              </a>
            ))}
        </article>
      </main>
    </section>
  );
};

export default ProjectSection;
