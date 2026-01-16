import { increment } from "./state.js";

export function runUITest() {
  const status = document.getElementById("status");
  const count = increment();

  status.textContent = `Status: Clicks = ${count}`;
  status.classList.add("active");

  console.log("State updated:", count);
}