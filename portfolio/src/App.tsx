import styled from 'styled-components';
import './App.css';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Quote } from './sections/Quote';
import { Projects } from './sections/projects/Projects';


function App() {
  return (
    <Container>
      <Header />
      <Main />
			<Quote />
			<Projects />
    </Container>
  );
}

export default App;

const Container = styled.div`
	max-width:  1178px;
	margin: 0 auto;
`
