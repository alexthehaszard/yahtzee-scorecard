import { totalUpper, hasFinishedUpper } from "./Upper";
import { totalLower, hasFinishedLower } from "./Lower";
import { computed } from "@preact/signals-react";

const total = computed(() => {
  return totalUpper.value + totalLower.value;
});
const hasFinished = computed(() => {
  return hasFinishedUpper.value && hasFinishedLower.value;
});

export const Total = () => {
  return (
    <div className="row">
      <h3>Grand Total</h3>
      <p style={{ color: hasFinished.value ? "green" : "white" }}>{total}</p>
    </div>
  );
};
