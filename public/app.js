import { runUITest } from "./ui.js";
import { runLogicTest } from "./logic.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("runTestBtn")
    .addEventListener("click", () => {
      runUITest();
      const result = runLogicTest("caliber_probe");
      console.log("Final result:", result);
    });
});