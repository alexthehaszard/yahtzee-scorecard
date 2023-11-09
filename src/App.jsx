import "./App.css";
import { LowerHalf } from "./components/scorecard/Lower";
import { UpperHalf } from "./components/scorecard/Upper";
import { Total } from "./components/scorecard/Total";

export const App = () => {
  return (
    <main className="main">
      <UpperHalf></UpperHalf>
      <LowerHalf></LowerHalf>
      <Total></Total>
    </main>
  );
};
