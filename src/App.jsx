// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Button from "./Buttons/Buttons.jsx";
import Inputs_text from "./Inputs/Inputs-text.jsx"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* --------------------------------------- */}
      <div className='App'>
        <h1>My Todo App</h1>
        <form className='add content' action="" method="get">
          <Inputs_text content="Type a new todo" />
          <Button content="Add Todo"/>
        </form>
        <hr />
        <form className='form-check content' action="" method="get">
            <legend><h2>Todos</h2></legend>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Learn React</label>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Be Awesome</label>
          </div>   
        </form>
      </div>

    </>
  )
}

export default App
