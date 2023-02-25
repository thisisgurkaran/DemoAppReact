import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div onClick={() => setCounter((count) => count + 1)}>count ++</div>
      {counter}
    </>
  );
};

export default Counter;
