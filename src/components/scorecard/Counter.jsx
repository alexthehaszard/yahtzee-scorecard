import React from "react";

export const Counter = (props) => {
  return (
    <div className="counter">
      <button onClick={props.dec}>-</button>
      <p>{props.value}</p>
      <button onClick={props.inc}>+</button>
    </div>
  );
};
