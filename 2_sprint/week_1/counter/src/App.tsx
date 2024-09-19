import './App.css';
import { Counter } from './componets/Counter/Counter';
import { Settings } from './componets/Settings/Settings';

function App() {

  return (
    <div className="App">
			<Settings />
      <Counter />
    </div >
  );
}

export default App;
