// public/ui.js

import { runLogic } from "./logic.js";
import { updateState } from "./state.js";

export function runUITest() {
  const state = updateState({ input: "test input" });
  const result = runLogic(state);

  const status = document.getElementById("status");
  status.textContent = "Result: " + JSON.stringify(result);

  console.log("UI test ran successfully");
  console.log("State updated:", state);
  console.log("Final result:", result);
}