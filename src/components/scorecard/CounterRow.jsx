import React from "react";
import { Counter } from "./Counter";

export const CounterRow = (props) => {
  return (
    <div className="row">
      <h3
        style={{
          color: props.value > 0 || props.isZapped ? "grey" : "white",
        }}
        onClick={props.setZapped}
        title={`Zap ${props.title}`}
      >
        {props.title}
      </h3>
      <Counter value={props.value} inc={props.inc} dec={props.dec}></Counter>
    </div>
  );
};
