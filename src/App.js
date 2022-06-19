//Css
import './App.css';

//Sections
import Navbar from './sections/Navbar';
import Landing from './sections/Landing';
import Introduction from './sections/Introduction';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Introduction/>
      <Skills/>
      <Projects/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;