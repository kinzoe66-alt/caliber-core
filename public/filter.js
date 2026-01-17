export function createFilter(label = "caliber") {
  const events = [];
  let last = Date.now();

  const record = (type) => {
    const now = Date.now();
    events.push({ type, at: now, delta: now - last });
    last = now;
  };

  window.addEventListener("click", () => record("click"));
  window.addEventListener("keydown", () => record("key"));

  return {
    snapshot() {
      return {
        label,
        events,
        idleMs: Date.now() - last
      };
    }
  };
}
