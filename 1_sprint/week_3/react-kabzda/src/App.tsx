import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating } from './components/Rating/Rating';
import { UncontrolledAccordion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';

function App() {
  console.log("App rendering")
  return (
    <div className='App'>
      {/* <OnOff /> */}
      {/* <PageTitle title={"This is APP component"} /> */}
      {/* <PageTitle title={"My friends"} /> */}
      {/* Article 1 */}
      {/* <Rating value={3} /> */}
      <UncontrolledAccordion titleValue={"Menu"} />
			<UncontrolledRating />
      {/* <Accordion titleValue={"Users"} collapsed={false} /> */}
      {/* Article 2 */}
      {/* <Rating value={0} /> */}
      {/* <Rating value={1} /> */}
      {/* <Rating value={2} /> */}
      {/* <Rating value={3} /> */}
      {/* <Rating value={4} /> */}
      {/* <Rating value={5} /> */}
    </div>
  );
}

export default App;
