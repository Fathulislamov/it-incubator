import { Footer } from "./footer/Footer";
import { Header } from './header/Header';
import { Main } from './main/Main';
import { AboutMe } from './sections/aboutMe/AboutMe';
import { Contacts } from './sections/contacts/Contacts';
import { Projects } from './sections/projects/Projects';
import { Quote } from './sections/quote/Quote';
import { Skills } from './sections/skills/Skills';


function App() {
  return (
    <>
      <Header />
      <Main />
      {/* <Quote />
      <Projects />
      <Skills />
      <AboutMe /> 
			<Contacts />
			<Footer />
			*/}
    </>
  );
}

export default App;

