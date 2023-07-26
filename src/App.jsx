// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Button from "./Buttons/Buttons.jsx";
import Inputs_text from "./Inputs/Inputs-text.jsx"
// import Todos from './Outputs/todos';
import { useState, useRef, useEffect } from 'react';
// import uuidv4 from 'uuid/v4'
// import Todos from "./Outputs/todos.jsx"

function App() {
  const [todos, setTodos] = useState([]);
  // const handleInput = (e) => {
  //     setTodos(e.target.value)
  // }

  // const LOCAL_STORAGE_KEY = 'todoApp.todos'

  
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])


  // useEffect(() => {
  //   const storedTodos = localStorage.getItem('todos');
  //   if (storedTodos) {
  //     setTodos(JSON.parse(storedTodos));
  //   }
  // }, []);

  const [isChecked, setIsChecked] = useState(false);
  const [index, setIndex] = useState(1);
  const inputRef = useRef();
  useEffect(()=> {
    console.log(inputRef);
  })
  
  const handleDeleteClick = (event) => {
    event.preventDefault();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        // const todoId = checkbox.parentNode.id;
        // setTodos(todos.filter(todo => todo.id !== parseInt(todoId.split('-')[1])));
        checkbox.parentNode.remove();
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    const formOutput = document.getElementById("form-output");

    const newTodo = {
      id: index,
      content: inputRef.current.value,
      isChecked: isChecked
    };
    setTodos([...todos, newTodo]);

    formOutput.innerHTML += `
    <div id="${index}">
      <input type="checkbox" name="" id="checkbox-${index}" ${isChecked ? "checked" : "unchecked"} />
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
        <form id='form-output' className='form-check content' onSubmit={handleDeleteClick} method="get">
            <legend><h2>Todos</h2></legend>
            <Button content="Delete Todo" id="button-delete"/>
        </form>
        {/* <Todos/> */}
        {/* <div>{todos}</div> */}
      </section>
    </>
  )
}

export default App
