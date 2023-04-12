import React from "react";
import uuid from "react-uuid";

import { useState, useEffect } from "react";

function Form({
  input,
  setInput,
  todo,
  setTodo,
  edit,
  setEdit,
  setCount,
  count,
}) {
  // const [input, setInput] = useState("");

  const updateTodo = (title, id, completed) => {
    const newTodo = todo.map((task) =>
      task.id === id ? { title, id, completed } : task
    );
    setTodo(newTodo);
    setEdit("");
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  function handleSubmit(e) {
    e.preventDefault();

    if (input) {
      if (!edit) {
        setTodo([...todo, { id: uuid(), title: input, completed: false }]);
        setInput("");
        // () => { setCount(count+= ) }
        setCount(() => count++);
      } else {
        updateTodo(input, edit.id, edit.completed);
      }
    } else {
      alert("input task");
    }
  }

  const handleOnchange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={handleOnchange}
            placeholder="Input task..."
            autoFocus
          />

          <button type="submit"> {edit ? "Save" : "Add"}</button>
        </form>
      </div>
    </>
  );
}

export default Form;
