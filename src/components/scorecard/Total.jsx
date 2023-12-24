import { totalUpper, hasFinishedUpper } from "./Upper";
import { totalLower, hasFinishedLower } from "./Lower";
import { computed } from "@preact/signals-react";
import React from "react";

export const total = computed(() => {
  return totalUpper.value + totalLower.value;
});
export const hasFinished = computed(() => {
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
