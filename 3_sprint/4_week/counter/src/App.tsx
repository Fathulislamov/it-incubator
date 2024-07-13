import { useState } from 'react';
import './App.css';
import { Counter } from './componets/Counter/Counter';
import { Settings } from './componets/Settings/Settings';

export type ValuesType = {
  maxValue: number
  startValue: number
  count: number
  error: string
  isNewData: boolean
}

function App() {
  return (
    <div className="App">
      <Settings />
      <Counter />
    </div >
  );
}

export default App;
