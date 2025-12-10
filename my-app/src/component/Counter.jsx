import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handelButton = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex flex-col items-center w-full m-auto ">
      <button onClick={handelButton}>click me</button>
      <p className="border p-5">{count}</p>
    </div>
  );
};

export default Counter;
