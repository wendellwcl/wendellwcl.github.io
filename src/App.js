//Css
import './App.css';

//Componentes
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Introduction/>
      <Skills/>
      <Projects/>
      <Faq/>
    </div>
  );
}

export default App;