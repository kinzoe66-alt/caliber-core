import { runUITest } from "./ui.js";
import { runLogic } from "./logic.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("runTestBtn")
    .addEventListener("click", () => {
      runUITest();
      const result = runLogic();
      console.log("Final result:", result);
    });
});
