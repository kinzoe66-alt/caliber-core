import { createFilter } from "./filter.js";
import { evaluateSnapshot } from "./logic.js";

const output = document.getElementById("output");

window.runTest = function runTest() {
  const filter = createFilter("caliber_session");

  // simulate interaction
  filter.click();
  filter.runTest();

  const snapshot = filter.snapshot();
  const result = evaluateSnapshot(snapshot);

  output.textContent = JSON.stringify(result, null, 2);
};

document.getElementById("runTestBtn")
  .addEventListener("click", window.runTest);
