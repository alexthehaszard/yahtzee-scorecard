import React from "react";

export const ManualInput = (props) => {
  return (
    <div className="manual_input">
      <input
        type="number"
        onChange={(event) => props.oninput(event.target.value)}
        placeholder="0"
        inputMode="numeric"
      />
    </div>
  );
};
