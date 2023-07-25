// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Button from "./Buttons/Buttons.jsx";
import Inputs_text from "./Inputs/Inputs-text.jsx"
// import Todos from './Outputs/todos';
import { useState, useRef, useEffect } from 'react';
// import Todos from "./Outputs/todos.jsx"

function App() {
  // const [todos, setTodos] = useState("");
  // const handleInput = (e) => {
  //     setTodos(e.target.value)
  // }
  const [isChecked, setIsChecked] = useState(false);
  const [index, setIndex] = useState(1);
  const inputRef = useRef();
  useEffect(()=> {
    console.log(inputRef);
  })
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    const formOutput = document.getElementById("form-output");
    formOutput.innerHTML += `
    <div id="${index}">
      <input type="checkbox" name="" id="checkbox-${index}" ${isChecked ? "checked" : "unchecked"} onChange="${handleCheckboxChange}" />
      <label id="todo-${index}" className='${isChecked ? "checked" : ""}'>${inputRef.current.value}</label>
    </div>
      `;

    setIndex(index + 1);
    inputRef.current.value = "";
  }

  return (
    <>
      <section className='App'>
        <h1>My Todo App</h1>
        <form className='add content' onSubmit={handleSubmit} method="get">
          <Inputs_text content="Type a new todo"
          //  to_do={todos} setTo_do={handleInput} 
          input_ref={inputRef}
           />
          <Button content="Add Todo" id="button-submit" />
        </form>
        <hr />
        <form id='form-output' className='form-check content' action="" method="get">
            <legend><h2>Todos</h2></legend>
        </form>
        {/* <Todos/> */}
        {/* <div>{todos}</div> */}
      </section>
    </>
  )
}

export default App
