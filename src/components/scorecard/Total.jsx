import { totalUpper, hasFinishedUpper } from "./Upper";
import { totalLower, hasFinishedLower } from "./Lower";
import { computed } from "@preact/signals-react";
import React from "react";

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
      <p
        style={{
          textDecoration: hasFinished.value ? "underline" : "none",
          fontWeight: hasFinished.value ? "bold" : "normal",
        }}
      >
        {total}
      </p>
    </div>
  );
};
