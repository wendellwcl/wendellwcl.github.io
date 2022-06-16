//Css
import './App.css';

//Componentes
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Introduction/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;