import { useState } from 'react';
import './App.css';
import { Counter } from './componets/Counter/Counter';
import { Settings } from './componets/Settings/Settings';

export type SetValuesType = {
  maxValue: number
  startValue: number
}

function App() {

  const [value, setValue] = useState<SetValuesType>({ maxValue: 5, startValue: 0 })
  const [error, setError] = useState<string>('')
  return (
    <div className="App">
      <Settings setValue={setValue} currentValue={value} error={error} setError={setError}/>
      <Counter startValue={value.startValue} maxValue={value.maxValue} error={error} />
    </div >
  );
}

export default App;
