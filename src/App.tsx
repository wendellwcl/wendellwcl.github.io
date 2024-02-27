//Custom Hooks
import useTheme from "./hooks/useTheme.tsx";

//Sections
import AboutSection from "./sections/AboutSection/AboutSection.tsx";
import HeroSection from "./sections/HeroSection/HeroSection.tsx";

function App() {
    useTheme();

    return (
        <main>
            <HeroSection />
            <AboutSection />
        </main>
    );
}

export default App;
