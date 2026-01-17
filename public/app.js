import { createFilter } from "./filter.js";
import { evaluateSnapshot } from "./logic.js";

const out = document.getElementById("out");
const btn = document.getElementById("run");

const filter = createFilter();

btn.onclick = () => {
  const snap = filter.snapshot();
  const res = evaluateSnapshot(snap);
  out.textContent = JSON.stringify(res, null, 2);
};
