import React from "react"
import ReactDOM from "react-dom/client"
export const App = () => {
  return (
    <div>
      <h2>
        Какая команда позволяет на время «сдать в архив» (или отложить) изменения, сделанные в рабочей копии, чтобы вы
        могли применить их позже? Откладывание изменений полезно, если вам необходимо переключить контекст и вы пока не
        готовы к созданию коммита.
      </h2>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(<App />)
// 📜 Описание:
// Какая команда позволяет на время «сдать в архив» (или отложить) изменения, сделанные в рабочей
// копии, чтобы вы могли применить их позже? Откладывание изменений полезно, если вам необходимо переключить
// контекст и вы пока не готовы к созданию коммита.
// 🖥 Пример ответа: git init
