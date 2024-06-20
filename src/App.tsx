//Sections
import AboutSection from "./sections/AboutSection/AboutSection.tsx";
import ContactSection from "./sections/ContactSection/ContactSection.tsx";
import HeroSection from "./sections/HeroSection/HeroSection.tsx";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection.tsx";
import SkillsSection from "./sections/SkillsSection/SkillsSection.tsx";

//Components
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import SvgGradient from "./components/SvgGradient/SvgGradient.tsx";

//Utils
import SamsungAlert from "./utils/SamsungAlert.ts";
import setScrollAnimations from "./utils/setScrollAnimations.ts";

function App() {
    //Checking Samsung browser in dark mode and showing alert to user
    SamsungAlert();

    //Applying scroll animation logic
    setScrollAnimations();

    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
            <SvgGradient />
        </>
    );
}

export default App;
