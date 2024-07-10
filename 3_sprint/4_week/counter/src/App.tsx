import { useState } from 'react';
import './App.css';
import { Counter } from './componets/Counter/Counter';
import { Settings } from './componets/Settings/Settings';

export type ValuesType = {
  maxValue: number
  startValue: number
	error: string
}

function App() {
  // const readLocalStorage = () => {
  //   const InitialState: ValuesType = {
  //     maxValue: 5,
  //     startValue: 0
  //   }
  //   const res = localStorage.getItem('state')
  //   return res ? JSON.parse(res) : InitialState
  // }
  //
  // const writeLocalStorage = (state: ValuesType) => {
  //   return localStorage.setItem('state', JSON.stringify(state))
  // }

  const [value, setValue] = useState<ValuesType>(readLocalStorage())

  const [error, setError] = useState<string>('')
  const [isNewData, setIsNewData] = useState<boolean>(false)

  const onChangeValue = (value: ValuesType) => {
    setValue(value)
    if (!isNewData) setIsNewData(true)
  }


  const setNewDataHandler = () => {
    setIsNewData(false)
    writeLocalStorage(value)
  }

  return (
    <div className="App">
      <Settings onChangeValue={onChangeValue} currentValue={value} error={error} setError={setError} isNewData={isNewData} setNewDataHandler={setNewDataHandler} />
      <Counter startValue={value.startValue} maxValue={value.maxValue} error={error} newData={isNewData} />
    </div >
  );
}

export default App;
