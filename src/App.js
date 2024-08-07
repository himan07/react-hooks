import React from "react";
import UseReducerHooks from "./useReducerHooks";
import UseCallbackHooks from "./useCallbackHooks";
import Memo from "./useMemoHooks";
import UseRefHook from "./useRefHooks";

const App = () => {
  return (
    <div>
      {/* <UseReducerHooks /> */}
      {/* <UseCallbackHooks /> */}
      {/* <Memo /> */}
      <UseRefHook />
    </div>
  );
};

export default App;
