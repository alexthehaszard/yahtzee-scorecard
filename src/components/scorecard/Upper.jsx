import { CounterRow } from "./CounterRow";
import { signal, computed } from "@preact/signals-react";

const counters = signal([
  { count: 0, title: "Aces", zapped: false },
  { count: 0, title: "Twos", zapped: false },
  { count: 0, title: "Threes", zapped: false },
  { count: 0, title: "Fours", zapped: false },
  { count: 0, title: "Fives", zapped: false },
  { count: 0, title: "Sixes", zapped: false },
]);
const totalBeforeBonus = computed(() => {
  return counters.value.reduce((a, b) => a + b.count, 0);
});
const bonus = computed(() => {
  return totalBeforeBonus >= 63 ? 35 : 0;
});
export const totalUpper = computed(() => {
  return totalBeforeBonus + bonus;
});
export const hasFinishedUpper = computed(() => {
  return counters.value.filter((m) => !(m.zapped || m.count > 0)).length === 0;
});

export const UpperHalf = (props) => {
  const updateCounter = (index, dir) => {
    counters.value = counters.value.map((m, i) => {
      if (i === index) {
        if (dir === true && m.count < 5 * (index + 1)) {
          m.count += index + 1;
        } else if (dir === false && m.count > 0) {
          m.count -= index + 1;
        }
      }
      return m;
    });
  };

  const toggleZap = (index) => {
    counters.value = counters.value.map((m, i) => {
      if (i === index) {
        m.zapped = !m.zapped;
      }
      return m;
    });
  };

  return (
    <div className="upper">
      <div className="border_bottom">
        {counters.value.map((m, i) => {
          return (
            <CounterRow
              title={m.title}
              value={m.count}
              isZapped={m.zapped}
              setZapped={() => toggleZap(i)}
              inc={() => updateCounter(i, true)}
              dec={() => updateCounter(i, false)}
              key={m.title}
            ></CounterRow>
          );
        })}
      </div>
      <div className="row">
        <h3>Bonus</h3>
        <p>{bonus.value}</p>
      </div>
      <div className="row border_bottom">
        <h3>Total Upper</h3>
        <p>{totalUpper}</p>
      </div>
    </div>
  );
};
