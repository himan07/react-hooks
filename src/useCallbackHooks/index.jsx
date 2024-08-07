import React, { useCallback, useState, memo } from "react";
import Todo from "./Todo";

const UseCallbackHooks = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const Increament = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `New Entry`]);
  }, [todos]);

  //   const addTodo = () => {
  //     setTodos((prev) => [...prev, `New Entry`]);
  //   };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Count:{count}</h1>
        <button onClick={Increament}>Increment</button>
      </div>
    </div>
  );
};

export default memo(UseCallbackHooks);
