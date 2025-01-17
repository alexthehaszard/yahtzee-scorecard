import React from "react";

export const ManualInput = (props) => {
  return (
    <div className="manual_input">
      <input
        type="number"
        onChange={(event) => props.oninput(event.target.value)}
        style={{ borderColor: props.value > 30 ? "red" : "white" }}
        placeholder="0"
        inputMode="numeric"
      />
      <span style={{ display: props.value > 30 ? "flex" : "none" }}>
        Invalid
      </span>
    </div>
  );
};
