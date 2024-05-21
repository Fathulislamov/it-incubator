import React, {useState, MouseEvent, ChangeEvent, ChangeEventHandler} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function User() {
    const [userName, setUserName] = useState<string>("")
     const onChangeHandler = (e: ChangeEventHandler<HTMLInputElement>) => setUserName(e.currentTarget.value)
    return (
        <div>
            <p>{userName}</p>
            <input
                 onChange={onChangeHandler}
            />
        </div>
    )
}
ReactDOM.render(
    <User/>, document.getElementById('root')
);
// Что надо написать вместо ххх, чтобы правильно типизировать
// параметр функции?
