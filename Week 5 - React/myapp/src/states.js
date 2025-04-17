import React, { useEffect, useRef, useState } from "react";

const States = () => {
  // state-count , setState-setCount
  const [count, setCount] = useState(0);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const para = useRef(null);

  console.log(para);
  const incre = () => {
    setCount(count + 1);
  };

  const decre = () => {
    setCount(count - 1);
  };

  const Handle = () => {
    setwindowWidth(window.innerWidth);
  };

  const colors = ["#fcba03", "#03fc5e", "#03fcf4", "#fc03a0", "#fc03e1"];

  useEffect(() => {
    setwindowWidth(Handle);
  }, [windowWidth]);

  const toChange = () => {
    const Random = Math.floor(Math.random() * colors.length);
    para.current.style.backgroundColor = colors[Random];
  };

  return (
    <div>
      <button onClick={incre}>+</button>
      <span>{count}</span>
      <button onClick={decre}>-</button>
      <p>{windowWidth}</p>
      <p ref={para}>hi</p>
      <button onClick={toChange}>Change Color</button>
    </div>
  );
};

export default States;
