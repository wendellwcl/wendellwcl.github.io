//Custom Hooks
import useTheme from "./hooks/useTheme.tsx";

//Sections
import HeroSection from "./sections/HeroSection/HeroSection.tsx";

function App() {
    useTheme();

    return (
        <main>
            <HeroSection />
        </main>
    );
}

export default App;
