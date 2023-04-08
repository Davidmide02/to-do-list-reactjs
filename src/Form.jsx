import React from "react";

// import { v4 as uuidv4 } from "uuid";
// import { uuid as id } from "react-uuid";
import uuid from "react-uuid";

import { useState } from "react";



function Form({ input, setInput, todo, setTodo }) {

    // const [input, setInput] = useState("");

    function handleSubmit(e) {

        e.preventDefault();
        setTodo([...todo, { id: uuid(), title: input, completed: false }])
        setInput("");

    }

    const handleOnchange = (e) => {
        setInput(e.target.value);
        console.log(input);
        // setInput("");

    }

    return (
        <>
            <div className="form">

                <form onSubmit={handleSubmit}  >
                    <input type="text"
                        value={input}
                        onChange={handleOnchange}
                        placeholder="Input task..."
                    />

                    <button type="submit">Add</button>


                </form>

                <p>{input}</p>
            </div>
        </>
    )

}

export default Form;