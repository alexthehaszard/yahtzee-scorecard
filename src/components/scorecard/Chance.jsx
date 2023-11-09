import { ManualInputRow } from "./ManualInputRow";
import { signal, computed } from "@preact/signals-react";
import React from "react";

const chance = signal([{ count: 0, title: "Chance", zapped: false }]);
export const totalChance = computed(() => {
  return parseInt(chance.value[0].count === "" ? 0 : chance.value[0].count);
});
export const hasFinishedChance = computed(() => {
  return chance.value.filter((m) => !(m.zapped || m.count > 0)).length === 0;
});

export const Chance = () => {
  const onInputs = (value) => {
    chance.value = chance.value.map((m) => {
      m.count = value;
      return m;
    });
  };

  const toggleZap = () => {
    chance.value = chance.value.map((m) => {
      m.zapped = !m.zapped;
      return m;
    });
  };

  return (
    <div>
      <ManualInputRow
        value={chance.value[0].count}
        title={chance.value[0].title}
        oninput={(value) => onInputs(value)}
        isZapped={chance.value[0].zapped}
        setZapped={() => toggleZap()}
        key={chance.value[0].title}
      ></ManualInputRow>
    </div>
  );
};
