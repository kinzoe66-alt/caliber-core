export function createFilter(sessionLabel = "caliber_filter_v1") {
  const events = [];
  let start = Date.now();
  let lastEventAt = start;

  function record(type) {
    const now = Date.now();
    events.push({ type, t: now });
    lastEventAt = now;
  }

  document.addEventListener("click", () => record("click"));
  document.addEventListener("keydown", () => record("key"));

  return function snapshot() {
    const now = Date.now();
    return {
      session: sessionLabel,
      durationMs: now - start,
      idleMs: now - lastEventAt,
      events
    };
  };
}
