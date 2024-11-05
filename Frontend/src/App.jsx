import { useState } from 'react'

import arthur from './assets/Arthur_LAGNEAUX.jpg'
import flo from './assets/canard_alive2.gif'
import timeo from './assets/Timeo.jpg'
import viteLogo from '/vite.svg'

import './App.css'

import CounterButton from './components/CounterButton/CounterButton'
import PlayerTable from './components/PlayerTable/PlayerTable'
import ToDoList from './components/TodoList/TodoList'


const players = [
  {
    "id": 1,
    "name": "Florian",
    "score": 0,
    "pp": flo
  },
  {
    "id": 2,
    "name": "Arthur",
    "score": 0,
    "pp": arthur
  },
  {
    "id": 3,
    "name": "Timéo",
    "score": 0,
    "pp": timeo
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={flo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <CounterButton name={"Florian"} />
        <PlayerTable players={players} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ToDoList />
    </>
  )
}

export default App
