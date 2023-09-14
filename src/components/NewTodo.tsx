import { useState, createContext } from "react";
import "../css/NewTodo.css";
import DisplayTodo from "./DisplayTodo";

export const todoContext = createContext("");

const NewTodo = () => {
  const [input, setInput] = useState<string>("");
  let x = "";
  return (
    <>
      <todoContext.Provider value={input}>
        <div className="add-todo">
          <div className="input-container">
            <span className="input-label">Add new todo:</span>
            <input
              className="input-box"
              type="text"
              placeholder="Add todo"
              aria-label="todo"
              onChange={(e) => {
                x = e.target.value;
              }}
            />
          </div>
          <button
            className="addTodoBtn"
            onClick={() => {
              setInput(x);
              //console.log(input);
            }}
          >
            Add
          </button>
          {/* <div className="temp">{input}</div> */}
        </div>
        <DisplayTodo />
      </todoContext.Provider>
    </>
  );
};

export default NewTodo;
