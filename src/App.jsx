import "./App.css";
import { LowerHalf } from "./components/scorecard/Lower";
import { UpperHalf } from "./components/scorecard/Upper";
import { Total } from "./components/scorecard/Total";
import React from "react";

export const App = () => {
  return (
    <main className="app">
      <UpperHalf></UpperHalf>
      <LowerHalf></LowerHalf>
      <Total></Total>
    </main>
  );
};
