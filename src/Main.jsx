import React from "react";

export const Main = () => {
  return (
    <main className="main">
      <h1>Simple Yahtzee Scorecard</h1>
      <p>
        For the rules of Yahtzee, view{" "}
        <a
          target="_blank"
          href="https://www.hasbro.com/common/instruct/yahtzee.pdf"
          rel="noopener noreferrer"
        >
          this
        </a>{" "}
        pdf file. To play Yahtzee, all you need is 5 dice!
      </p>
      <a href="/play">
        <h1>Play Yahtzee!</h1>
      </a>
    </main>
  );
};
