import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';

// type messageType = { message: string }
export function App() {
  const [message, setMessage] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
    { message: 'message4' },
    { message: 'message5' }
  ]
  )

  const addMessage = (title: string) => {
    setMessage([{ message: title }, ...message])
  }

  const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
  }

  const [title, setTitle] = useState('')

  return (
    <div className="App">
      {/*   <div> */}
      {/*     <input /> */}
      {/*     <button>+</button> */}
      {/*  */}
      {/* </div> */}
      {/* <FullInput addMessage={addMessage} /> */}
      <Input setTitle={setTitle} title={title} />
      <Button name='+' callBack={callBackButtonHandler} />
      {message.map((el, index) => {
        return (
          <div key={index}>{el.message}</div>
        )
      })}
    </div>
  );
}
