import { Header } from './header/Header';
import { Main } from './main/Main';
import { AboutMe } from './sections/aboutMe/AboutMe';
import { Projects } from './sections/projects/Projects';
import { Quote } from './sections/quote/Quote';
import { Skills } from './sections/skills/Skills';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Quote />
      <Projects />
      <Skills />
      <AboutMe /> 
    </>
  );
}

export default App;

