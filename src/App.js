import { Grid } from '@chakra-ui/react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Grid>
        <Navbar />
        <About />
        <Skills />
      </Grid>
    </div>
  );
}

export default App;
