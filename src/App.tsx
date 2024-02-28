//Custom Hooks
import useTheme from "./hooks/useTheme.tsx";

//Sections
import AboutSection from "./sections/AboutSection/AboutSection.tsx";
import ContactSection from "./sections/ContactSection/ContactSection.tsx";
import HeroSection from "./sections/HeroSection/HeroSection.tsx";
import SkillsSection from "./sections/SkillsSection/SkillsSection.tsx";

//Components
import SvgGradient from "./components/SvgGradient/SvgGradient.tsx";

function App() {
    useTheme();

    return (
        <>
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <SvgGradient />
        </>
    );
}

export default App;
