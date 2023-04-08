// import { useState } from 'react'
import React, { useState } from 'react'
import ReactDom from 'react-dom'
import './App.css'
import Header from './Header'
import Form from './Form'
import Todolist from './todolist'

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);


  return (
    <div className="App">

      <Header />
      <Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}

      />
      <Todolist
        todo={todo}
        setTodo={setTodo}

      />

    </div>
  )
}

export default App
