import { Container } from './components/Container';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Projects } from './sections/projects/Projects';
import { Quote } from './sections/quote/Quote';
import { Skills } from './sections/skills/Skills';
import { AboutMe } from './sections/about-me/AboutMe';


function App() {
  return (
    <Container>
      <Header />
			{/*<Main />
      <Quote />
      <Projects />
			<Skills />
			<AboutMe />*/}
    </Container>
  );
}

export default App;

