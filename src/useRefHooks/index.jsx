import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [myData, setMyData] = useState("");

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <input
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <p>The no of times render: {count.current}</p>
    </div>
  );
};

export default UseRefHook;
