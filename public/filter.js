export function createFilter() {
  const events = [];
  let lastEventAt = Date.now();

  function record(type) {
    events.push({ type, at: Date.now() });
    lastEventAt = Date.now();
  }

  document.addEventListener("click", () => record("click"));
  document.addEventListener("mousemove", () => record("move"));

  return {
    snapshot() {
      return {
        events: [...events],
        idleMs: Date.now() - lastEventAt
      };
    }
  };
}
