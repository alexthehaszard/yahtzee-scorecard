import { signal, computed } from "@preact/signals-react";
import { BinaryInputRow } from "./BinaryInputRow";
import React from "react";

const counters = signal([
  { count: 0, title: "Full House", zapped: false, points: 25 },
  { count: 0, title: "Short Straight", zapped: false, points: 30 },
  { count: 0, title: "Long Straight", zapped: false, points: 40 },
  { count: 0, title: "Yahtzee", zapped: false, points: 50 },
]);

export const totalBinaryInputs = computed(() => {
  return parseInt(counters.value.reduce((a, b) => a + b.count, 0));
});
export const hasFinishedBinaryInputs = computed(() => {
  return counters.value.filter((m) => !(m.zapped || m.count > 0)).length === 0;
});
export const zappedYahtzee = computed(() => {
  return counters.value.filter((m) => m.points === 50).map((m) => m.zapped)[0];
});

export const BinaryInputCollection = () => {
  const toggleZap = (index) => {
    counters.value = counters.value.map((m, i) => {
      if (i === index) {
        m.zapped = !m.zapped;
      }
      return m;
    });
  };

  const onInputs = (index) => {
    counters.value = counters.value.map((m, i) => {
      if (i === index) {
        m.count = m.count > 0 ? 0 : m.points;
      }
      return m;
    });
  };

  return (
    <div>
      {counters.value.map((m, i) => {
        return (
          <BinaryInputRow
            value={m.count}
            title={m.title}
            onclick={() => onInputs(i)}
            placeholder={m.points}
            isZapped={m.zapped}
            setZapped={() => toggleZap(i)}
            key={m.title}
          ></BinaryInputRow>
        );
      })}
    </div>
  );
};
