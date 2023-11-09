import { signal, computed } from "@preact/signals-react";
import { ManualInputRow } from "./ManualInputRow";

const ofAKinds = signal([
  { count: 0, title: "3 of a Kind", zapped: false },
  { count: 0, title: "4 of a Kind", zapped: false },
]);
export const totalOfAKinds = computed(() => {
  return parseInt(
    ofAKinds.value.reduce((a, b) => a + (isNaN(b.count) ? 0 : b.count), 0)
  );
});
export const hasFinishedOfAKinds = computed(() => {
  return ofAKinds.value.filter((m) => !(m.zapped || m.count > 0)).length === 0;
});

export const OfAKinds = () => {
  const toggleZap = (index) => {
    ofAKinds.value = ofAKinds.value.map((m, i) => {
      if (i === index) {
        m.zapped = !m.zapped;
      }
      return m;
    });
  };

  const onInputs = (index, value) => {
    ofAKinds.value = ofAKinds.value.map((m, i) => {
      if (i === index) {
        m.count = parseInt(value);
      }
      return m;
    });
  };

  return (
    <div>
      {ofAKinds.value.map((m, i) => {
        return (
          <ManualInputRow
            value={m.count}
            title={m.title}
            oninput={(value) => onInputs(i, value)}
            isZapped={m.zapped}
            setZapped={() => toggleZap(i)}
            key={m.title}
          ></ManualInputRow>
        );
      })}
    </div>
  );
};
