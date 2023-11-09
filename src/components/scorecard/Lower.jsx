import { OfAKinds, totalOfAKinds, hasFinishedOfAKinds } from "./OfAKinds";
import {
  BinaryInputCollection,
  totalBinaryInputs,
  hasFinishedBinaryInputs,
} from "./BinaryInputCollection";
import { Chance, totalChance, hasFinishedChance } from "./Chance";
import { computed } from "@preact/signals-react";
import React from "react";
import { YahtzeeBonus, totalYahtzeeBonus } from "./YahtzeeBonus";

export const totalLower = computed(() => {
  return (
    totalBinaryInputs.value +
    totalChance.value +
    totalOfAKinds.value +
    totalYahtzeeBonus
  );
});
export const hasFinishedLower = computed(() => {
  return (
    hasFinishedOfAKinds.value &&
    hasFinishedBinaryInputs.value &&
    hasFinishedChance.value
  );
});

export const LowerHalf = () => {
  return (
    <div>
      <OfAKinds></OfAKinds>
      <BinaryInputCollection></BinaryInputCollection>
      <Chance></Chance>
      <YahtzeeBonus></YahtzeeBonus>
      <div className="row">
        <h3>Total Lower</h3>
        <p>{totalLower.value}</p>
      </div>
    </div>
  );
};
