import './App.css';
import Button from "./Buttons/Buttons.jsx";
import Inputs_text from "./Inputs/Inputs-text.jsx";
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const handleDeleteClick = (event) => {
    event.preventDefault();
    const updatedTodos = todos.filter(todo => !todo.checked);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: inputRef.current.value,
      checked: false
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    inputRef.current.value = "";
  }

  return (
    <>
      <section className='App'>
        <h1>My Todo App</h1>
        <form className='add content' onSubmit={handleSubmit} method="get">
          <Inputs_text content="Type a new todo" input_ref={inputRef} />
          <Button content="Add Todo" id="button-submit" />
        </form>
        <hr />
        <form id='form-output' className='form-check content' onSubmit={handleDeleteClick} method="get">
          <legend><h2>Todos</h2></legend>
          <Button content="Delete Todo" id="button-delete" />
          {todos.map(todo => (
            <div key={todo.id}>
              <input
                type="checkbox"
                name=""
                id={`checkbox-${todo.id}`}
                checked={todo.checked}
                onChange={() => handleCheckboxChange(todo.id)}
              />
              <label
                id={`todo-${todo.id}`}
                className={todo.checked ? 'checked' : ''}
              >
                {todo.text}
              </label>
            </div>
          ))}
        </form>
      </section>
    </>
  );
}

export default App;