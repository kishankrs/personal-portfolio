import { useEffect } from "react";
import gsap from "gsap";

import "./SkillSection.css"; //Stylesheet

import { SKILLS } from "../../content/data"; //Data

const SkillsSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#skills-heading", {
      scrollTrigger: "#skills-heading",
      opacity: 1,
      duration: 2,
      delay: 2.5,
    })
      .from("#skills-heading", {
        x: -100,
        duration: 2,
        delay: -2,
      })
      .to("#skills-content", {
        scrollTrigger: "#skills-content",
        opacity: 1,
        duration: 1.5,
        delay: 1,
      })
      .from("#skills-content", {
        x: -100,
        duration: 1.5,
        delay: -1.5,
      });
  }, []);

  return (
    <section className="skills" id="skills">
      <header>
        <h2 className="heading" id="skills-heading">
          My Skills and Knowledge Set
        </h2>
      </header>
      <main>
        <article className="skills">
          {SKILLS.map(({ name }) => (
            <h3 className="text-skill green" id="skills-content">
              {name}
            </h3>
            // <p className="proj-desc orange">{name}</p>
          ))}
        </article>
      </main>
    </section>
  );
};

export default SkillsSection;
