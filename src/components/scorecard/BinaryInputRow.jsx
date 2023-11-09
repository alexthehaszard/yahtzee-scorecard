import React from "react";
import { BinaryInput } from "./BinaryInput";

export const BinaryInputRow = (props) => {
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
      <BinaryInput value={props.value} onclick={props.onclick}></BinaryInput>
    </div>
  );
};
