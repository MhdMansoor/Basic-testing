import "./App.css";
import Button from "./components/button/button";
import Todo from "./components/todo/todo";
import React, { useState } from "react";

function App() {
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "make dinner", completed: true },
  ];
  const [count, setCounter] = useState(0);
  const [delayedCounter, setDelayedCounter] = useState(0);
  const [value, setValue] = useState("");

  const delayCount = () =>
    setTimeout(() => {
      setDelayedCounter(delayedCounter + 1);
    }, 500);

  return (
    <div className="App">
      <h1>App</h1>
      <Button label="click me please"></Button>
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
      <button
        onClick={() => setCounter((prevCount) => prevCount + 1)}
        data-testid="addCount"
      >
        +
      </button>
      <div data-testid="count">{count}</div>
      <button
        onClick={() => setCounter((prevCount) => prevCount - 1)}
        data-testid="minusCount"
      >
        -
      </button>
      <div>
        <h1 data-testid="delayed-count">delayedCounter : {delayedCounter}</h1>
        <button data-testid="button-up" onClick={delayCount}>
          {" "}
          Up
        </button>
      </div>
    </div>
  );
}

export default App;
