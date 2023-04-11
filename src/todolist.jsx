import React from "react";
import { useState } from "react";

function Todolist({ todo, setTodo, setEdit, edit, setInput }) {
  // const[empty, setEmpty] = useState("");
  // const[load, setLoad] = useState

  const handleDelete = ({ id }) => {
    setTodo(todo.filter((task) => task.id !== id));
    console.log(id);
  };

  const handleEdit = ({ id }) => {
    const findTodo = todo.find((task) => task.id === id);
    setEdit(findTodo);
    console.log(findTodo);
    console.log(id);
    console.log(edit);
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
                />
              </li>

              <div className="btn-container">
                <button>Mark</button>
                <button onClick={() => handleEdit(task)}>
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button onClick={() => handleDelete(task)}>
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
              {/* {empty} */}
            </ul>
          );
        }
        // return (
        //     setEmpty(alert("Input task"))
        // )
      })}
      {/* <div className="todolist-container">
                <input type="text" />

                <div className="btn-container">
                    <button>Mark</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>

            </div> */}
    </div>
  );
}

export default Todolist;
