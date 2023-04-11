// import { useState } from 'react'
import React, { useState } from "react";
import ReactDom from "react-dom";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Todolist from "./todolist";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(null);

  return (
    <div className="App">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        edit={edit}
        setEdit={setEdit}
      />
      <Todolist
        todo={todo}
        setTodo={setTodo}
        setEdit={setEdit}
        edit={edit}
        setInput={setInput}
      />
    </div>
  );
}

export default App;
