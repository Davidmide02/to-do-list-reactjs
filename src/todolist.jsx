import React from "react";
import { useState } from "react";

function Todolist({ todo, setTodo, setEdit, edit, setInput, setCount, count }) {
  const handleComplete = (task) => {
    setTodo(
      todo.map((item) => {
        if (item.id === task.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDelete = ({ id }) => {
    setTodo(todo.filter((task) => task.id !== id));
    setCount(() => count--);
  };

  const handleEdit = ({ id }) => {
    const findTodo = todo.find((task) => task.id === id);
    setEdit(findTodo);
  };

  return (
    <div className="todo-container">
      {todo.map((task) => {
        if (task) {
          return (
            <ul key={task.id}>
              <li>
                <input
                  type="text"
                  value={task.title}
                  onChange={(e) => {
                    e.preventDefault();
                  }}
                  className={`${task.completed ?"complete":""}`}
        
                />
              </li>

              <div className="btn-container">
                <button onClick={() => handleComplete(task)}>Mark</button>
                <button onClick={() => handleEdit(task)}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button onClick={() => handleDelete(task)}>
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </ul>
          );
        }
      })}
    </div>
  );
}

export default Todolist;
