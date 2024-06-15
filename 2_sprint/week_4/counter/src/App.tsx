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
  const [isNewData, setIsNewData] = useState<boolean>(false)

  const onChangeValue = (value: SetValuesType) => {
    setValue(value)
    if(!isNewData) setIsNewData(true)
  }

  const setNewDataHandler = () => {
    setIsNewData(false)
  }
  return (
    <div className="App">
      <Settings  onChangeValue={onChangeValue} currentValue={value} error={error} setError={setError} isNewData={isNewData} setNewDataHandler={setNewDataHandler} />
      <Counter startValue={value.startValue} maxValue={value.maxValue} error={error} newData={isNewData} />
    </div >
  );
}

export default App;
