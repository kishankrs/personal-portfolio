import LandingSection from "./components/LandingSection/LandingSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import AboutSection from "./components/AboutSection/AboutSection";

import "./App.css";
import SkillSection from "./components/SkillSection/SkillSection";

const App = () => {
  return (
    <main>
      <LandingSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
    </main>
  );
};

export default App;
