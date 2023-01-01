import { useState } from 'react'
import FormTodo from './components/FormTodo'
import './App.scss'

function App() {

  return (
    <div className="App">
        <div className="todo-box">
          <div className="container">
            <FormTodo/>
          </div>
        </div>
    </div>
  )
}

export default App
