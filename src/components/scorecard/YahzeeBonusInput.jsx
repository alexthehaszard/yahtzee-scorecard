import React from "react";

export const YahtzeeBonusInput = (props) => {
  return (
    <div className="yahtzee_bonus_input">
      {props.checked.map((m, i) => {
        return (
          <button
            disabled={props.zapped}
            onClick={() => props.toggle(i)}
            key={i}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Antu_dialog-ok-apply.svg"
              alt="✔️"
              style={{ display: m ? "initial" : "none" }}
            />
          </button>
        );
      })}
    </div>
  );
};
