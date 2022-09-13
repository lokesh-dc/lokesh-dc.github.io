import { Grid } from '@chakra-ui/react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechStack from './components/TechStack';

function App() {
  return (
    <Grid px={{base:"15px",sm:"30px", md:"100px", lg:"150px"}} className="App" >
      <Grid>
        <Navbar />
        <Grid gap={{base:"20px", sm:"20px", md:"60px", lg:"100px"}}>
          <About  />
          <TechStack  />
          <Skills  />
          <Projects  />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
