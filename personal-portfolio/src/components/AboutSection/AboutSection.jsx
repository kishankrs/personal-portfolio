import { useEffect } from "react";
import gsap from "gsap";

// Stylesheets
import "./AboutSection.css";

const AboutSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to("#about-heading", {
      scrollTrigger: "#about-heading",
      opacity: 1,
      duration: 2,
      delay: 2.5,
    })
      .from("#about-heading", {
        x: -100,
        duration: 2,
        delay: -2,
      })
      .to("#about-content", {
        scrollTrigger: "#about-content",
        opacity: 1,
        duration: 2,
        delay: -1,
      })
      .from("#about-content", {
        x: -100,
        duration: 2,
        delay: -2,
      });
  }, []);

  return (
    <section className="about" id="about">
      <header>
        <h2 className="heading" id="about-heading">
          About Me
        </h2>
      </header>
      <main>
        <p className="text" id="about-content">
          I'm an Engineering student at SRM University, Chennai with experience
          in Embedded Systems -AVR Microcontrollers, HAL Libraries, Embedded C.
          I am looking for internships & learning opportunities in the field of
          Embedded Systems. Interested in Embedded, and Hardware Design roles.
        </p>
      </main>
    </section>
  );
};

export default AboutSection;
