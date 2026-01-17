import { createFilter } from "./filter.js";
import { evaluateSnapshot } from "./logic.js";

const output = document.getElementById("output");
const btn = document.getElementById("runBtn");

const filter = createFilter();

btn.addEventListener("click", () => {
  const snapshot = filter.snapshot();
  const result = evaluateSnapshot(snapshot);
  output.textContent = JSON.stringify(result, null, 2);
});
