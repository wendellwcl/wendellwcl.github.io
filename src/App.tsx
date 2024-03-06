//Custom Hooks
import useTheme from "./hooks/useTheme.tsx";

//Sections
import AboutSection from "./sections/AboutSection/AboutSection.tsx";
import ContactSection from "./sections/ContactSection/ContactSection.tsx";
import HeroSection from "./sections/HeroSection/HeroSection.tsx";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection.tsx";
import SkillsSection from "./sections/SkillsSection/SkillsSection.tsx";

//Components
import SvgGradient from "./components/SvgGradient/SvgGradient.tsx";

function App() {
    //Detect and apply user theme (darkmode or lightmode)
    useTheme();

    return (
        <>
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <SvgGradient />
        </>
    );
}

export default App;
