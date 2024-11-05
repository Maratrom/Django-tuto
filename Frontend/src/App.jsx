import './App.css';

import Home from './components/Home/Home';

import { Route, Routes } from 'react-router-dom';
import ToDoList from './components/TodoList/TodoList';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todolist' element={<ToDoList />} />
      </Routes>
    </>
  )
}

export default App
