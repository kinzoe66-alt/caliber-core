import { runUITest, resetUI } from "./ui/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("runTestBtn").addEventListener("click", runUITest);
  document.getElementById("resetBtn").addEventListener("click", resetUI);
});