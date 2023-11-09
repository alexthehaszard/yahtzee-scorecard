import { OfAKinds, totalOfAKinds, hasFinishedOfAKinds } from "./OfAKinds";
import {
  BinaryInputCollection,
  totalBinaryInputs,
  hasFinishedBinaryInputs,
} from "./BinaryInputCollection";
import { Chance, totalChance, hasFinishedChance } from "./Chance";
import { computed } from "@preact/signals-react";

export const totalLower = computed(() => {
  return totalBinaryInputs.value + totalChance.value + totalOfAKinds.value;
});
export const hasFinishedLower = computed(() => {
  return hasFinishedOfAKinds && hasFinishedBinaryInputs && hasFinishedChance;
});

export const LowerHalf = () => {
  return (
    <div>
      <OfAKinds></OfAKinds>
      <BinaryInputCollection></BinaryInputCollection>
      <Chance></Chance>
      <div className="row">
        <h3>Total Lower</h3>
        <p>{totalLower.value}</p>
      </div>
    </div>
  );
};
