import LandingSection from "./components/LandingSection/LandingSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import AboutSection from "./components/AboutSection/AboutSection";

import "./App.css";

const App = () => {
  return (
    <main>
      <LandingSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
};

export default App;
