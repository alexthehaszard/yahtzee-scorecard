import { signal, computed } from "@preact/signals-react";
import React from "react";
import { YahtzeeBonusInput } from "./YahzeeBonusInput";
import { zappedYahtzee } from "./BinaryInputCollection";

const counters = signal([{ count: 0, checked: [false, false, false] }]);
const zapped = computed(() => {
  return zappedYahtzee.value;
});

export const totalYahtzeeBonus = computed(() => {
  return counters.value.reduce((a, b) => a + b.count, 0);
});

export const YahtzeeBonus = () => {
  const toggleChecked = (index) => {
    counters.value = counters.value.map((m) => {
      if (m.checked[index]) m.count -= 100;
      else m.count += 100;
      m.checked[index] = !m.checked[index];
      return m;
    });
  };

  return counters.value.map((m) => {
    return (
      <div className="row" key={m.count}>
        <h3 style={{ color: zapped.value ? "grey" : "white" }}>
          Yahtzee Bonus
        </h3>
        <YahtzeeBonusInput
          zapped={zapped.value}
          checked={m.checked}
          toggle={toggleChecked}
        ></YahtzeeBonusInput>
      </div>
    );
  });
};
