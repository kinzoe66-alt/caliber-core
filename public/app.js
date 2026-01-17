import { createFilter } from "./filter.js";
import { evaluateSnapshot } from "./logic.js";

const filter = createFilter();

window.runTest = () => {
  const snapshot = filter.export();
  const result = evaluateSnapshot(snapshot);
  document.getElementById("output").textContent =
    JSON.stringify(result, null, 2);
};
