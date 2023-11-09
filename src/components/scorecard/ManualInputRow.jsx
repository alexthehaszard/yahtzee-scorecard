import React from "react";
import { ManualInput } from "./ManualInput";

export const ManualInputRow = (props) => {
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
      <ManualInput
        value={props.value}
        oninput={(value) => props.oninput(value)}
      ></ManualInput>
    </div>
  );
};
