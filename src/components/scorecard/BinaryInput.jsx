import React from "react";

export const BinaryInput = (props) => {
  return (
    <div className="binary_input">
      <button
        style={{
          background: props.value === 0 ? "rgba(0,0,0,0)" : "white",
          color: props.value === 0 ? "white" : "black",
        }}
        onClick={props.onclick}
      >
        {props.value}
      </button>
    </div>
  );
};
