import Popup from "reactjs-popup";
import React, { useState } from "react";
import { hasFinished, total } from "./Total";

export const CompletedPopup = () => {
  const [showModal, setShowModal] = useState(false);

  if (hasFinished.value) setTimeout(() => setShowModal(true), 1000);

  const saveScore = () => {
    let games = localStorage.getItem("games");
    if (!games) {
      localStorage.setItem("games", total.value);
      window.location.reload();
      return;
    }
    games += ":" + total.value;
    localStorage.setItem("games", games);
    window.location.reload();
  };

  return (
    <Popup open={showModal}>
      <div
        style={{
          background: "rgb(50, 50, 50)",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          padding: "3rem 0",
          position: "fixed",
          top: "0",
          left: "0",
        }}
        className="modal"
      >
        <button onClick={() => saveScore()}>Save Score</button>
      </div>
    </Popup>
  );
};
