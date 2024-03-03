import styled from 'styled-components';
import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Projects } from './sections/projects/Projects';
import { Quote } from './sections/quote/Quote';
import { Skills } from './sections/skills/Skills';


function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Quote />
      <Projects />
			<Skills />
    </Container>
  );
}

export default App;

const Container = styled.div`
	max-width:  1178px;
	margin: 0 auto;
`
