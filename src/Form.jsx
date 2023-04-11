import React from "react";

// import { v4 as uuidv4 } from "uuid";
// import { uuid as id } from "react-uuid";
import uuid from "react-uuid";

import { useState, useEffect } from "react";

function Form({ input, setInput, todo, setTodo, edit, setEdit }) {
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

    if (!edit) {
      setTodo([...todo, { id: uuid(), title: input, completed: false }]);
      setInput("");

      console.log("when edit null");
    } else {
      console.log("when edit has value");
      updateTodo(input, edit.id, edit.completed);
    }
  }

  const handleOnchange = (e) => {
    setInput(e.target.value);
    // setInput("");
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

          <button type="submit">{edit ? "Save" : "Add"}</button>
        </form>
      </div>
    </>
  );
}

export default Form;
