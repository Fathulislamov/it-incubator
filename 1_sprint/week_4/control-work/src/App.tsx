import { useState } from 'react';
import './App.css';
import { Button } from './componets/Button/Button';
import { Counter } from './componets/Counter/Counter';
import { ProgressBar } from './componets/ProgressBar/ProgressBar';

function App() {
  const randomNumber = () => Math.floor(Math.random() * 10) + 1;

  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(randomNumber())

  const increment = () => {
    count < maxCount && setCount(count + 1)
  }

  const reset = () => {
    setCount(0)
    setMaxCount(randomNumber)
  }

  return (
    <div className="App">
      <div> Max Count: {maxCount}</div>
      <Counter maxCount={maxCount} count={count} />
      <ProgressBar maxNumber={maxCount} currentNumber={count} />
      <div className={'buttons'}>
        <Button onClickHandler={increment} disabled={count === maxCount}>Inc</Button>
        <Button onClickHandler={reset} disabled={count === 0}>Reset</Button>
      </div>

    </div >
  );
}

export default App;
