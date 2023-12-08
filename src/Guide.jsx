import "./App.css";
import React from "react";

export const Guide = () => {
  return (
    <main className="guide">
      <h1>Scoring</h1>
      <h3>Upper Half</h3>
      <p>
        To score the upper half, it uses a counter-based system. For example, if
        you roll 3 fives, then you will press the "+" button next to the Fives
        column three times.
      </p>
      <h3>Lower Half</h3>
      <p>
        To score the lower half, there are multiple different types of inputs
        based on the way each of them are scored.
        <ul>
          <li>
            For 3 of a kind, 4 of a kind and Chance, Each score in entered in
            manually.
          </li>
          <li>
            For Full House, Small Straight, Long Straight and Yahtzee, tapping
            on the score will automatically add the amount.
          </li>
        </ul>
      </p>
      <h3>Yahtzee Bonus</h3>
      <p>
        A Yahtzee Bonus should only be checked when you have already achieved a
        Yahtzee in that game. When taking a Yahtzee bonus, you must also fill in
        a row using the final state of the dice, or zap a row if none apply.
      </p>
      <h1>Zapping/Cancelling</h1>
      <p>
        When a row has been scored, the title will darken. If you are taking 0
        for a certain row, then tapping on the title will "Zap" that score,
        meaning it will count for no points and darken.
      </p>
      <h1>Finishing a Game</h1>
      <p>
        When all rows have been filled in, the Grand Total will go green,
        indicating that the round is over and that is your final score.
      </p>
    </main>
  );
};
