import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Todolist from "./todolist";

function App() {
  const localMemory = JSON.parse(localStorage.getItem("todo")) || [];
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(localMemory);
  const [edit, setEdit] = useState(null);
  const [count, setCount] = useState(0);

  
  
  useEffect(()=> {
    localStorage.setItem("todo", JSON.stringify(todo))
  },[todo]);
  
  return (
    <div className="App">
      <Header count={count} />
      <Form
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        edit={edit}
        setEdit={setEdit}
        setCount={setCount}
        count={count}
      />
      <Todolist
        todo={todo}
        setTodo={setTodo}
        setEdit={setEdit}
        edit={edit}
        setInput={setInput}
        setCount={setCount}
        count={count}
      />
    </div>
  );
}

export default App;
