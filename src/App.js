//Css
import './App.css';

//Componentes
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Skills/>
    </div>
  );
}

export default App;