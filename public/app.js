import { createFilter } from "./filter.js";
import { evaluateSnapshot } from "./logic.js";

const filter = createFilter("caliber_filter_v1");

window.runTest = () => {
  const snapshot = filter.snapshot();
  const result = evaluateSnapshot(snapshot);
  console.log("SNAPSHOT:", snapshot);
  console.log("INSIGHT:", result);
};
