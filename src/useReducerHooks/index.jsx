import React, { useReducer } from "react";

const UseReducerHooks = () => {
  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
    return state;
  };

  const initialState = 0;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Counter app using useReducer Hooks</h1>
      <h1>{state}</h1>
      <div className="btns">
        <button
          style={{
            width: "100px",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
          }}
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          INC
        </button>{" "}
        &nbsp;
        <button
          style={{
            width: "100px",
            backgroundColor: "black",
            color: "white",
            padding: "10px",
          }}
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Dec
        </button>
      </div>
    </div>
  );
};

export default UseReducerHooks;
