
import './App.css';
import styled , {ThemeProvider} from 'styled-components';
import {darkTheme} from './utils/Themes';
import Skills from './Components/Skills';
import Hero from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Education from './Components/Education';
import {BrowserRouter as Router} from 'react-router-dom';
import Experience from './Components/Experience';
import Projects from './Components/Projects'
import Footer from './Components/Footer';
import Contact from './Components/Contact';


const Body = styled.div`
  background-color: ${({theme})=> theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
   `;

   const Wrapper = styled.div`
   background-color: linear-gradient{
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%,
   },
   linear-gradient{
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%,
   };
   width: 100%;
   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
   `;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar/>
      <Body>
      <Hero/>
      <Wrapper>
      <Skills/>
      <Experience/>
      <Education/>
      <Projects/>
      <Contact/>
      </Wrapper>
    
      <Footer/>
      </Body>
        </Router>      
        
    </ThemeProvider>
  );
}

export default App;
