import { createFilter } from "./filter.js";
import { evaluateSnapshot } from "./logic.js";

const output = document.getElementById("output");
const btn = document.getElementById("runTestBtn");

const filter = createFilter("caliber_filter_v1");

btn.addEventListener("click", () => {
  filter.click();

  const snapshot = filter.snapshot();
  const result = evaluateSnapshot(snapshot);

  output.textContent = JSON.stringify(result, null, 2);
});
