import { state, setState } from "./state.js";
import { log } from "./diagnostics.js";
import { filterRecon } from "./filter.js";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("runRecon");
  const out = document.getElementById("output");

  btn.addEventListener("click", async () => {
    setState({
      status: "running",
      lastRun: new Date().toISOString(),
      diagnostics: []
    });

    log(state.diagnostics, "Recon triggered");

    try {
      const res = await fetch("./recon.return.schema.json");
      if (!res.ok) throw new Error("Fetch failed");

      const payload = await res.json();
      log(state.diagnostics, "Payload loaded");

      const filtered = filterRecon(payload);
      log(state.diagnostics, "Payload filtered");

      setState({
        status: "complete",
        checkpoint: filtered.checkpoint
      });

      out.textContent = JSON.stringify(
        { state, result: filtered },
        null,
        2
      );

    } catch (e) {
      log(state.diagnostics, e.message, "error");
      setState({ status: "error" });

      out.textContent = JSON.stringify(
        { state, error: e.message },
        null,
        2
      );
    }
  });
});
