import "./App.css";
import { LowerHalf } from "./components/scorecard/Lower";
import { UpperHalf } from "./components/scorecard/Upper";
import { Total } from "./components/scorecard/Total";
import React from "react";
import { CompletedPopup } from "./components/scorecard/CompletedPopup";

export const App = () => {
  return (
    <main className="app">
      <CompletedPopup></CompletedPopup>
      <UpperHalf></UpperHalf>
      <LowerHalf></LowerHalf>
      <Total></Total>
    </main>
  );
};
