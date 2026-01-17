export function createFilter(label = "session") {
  let events = [];
  let lastEventAt = Date.now();

  function now() {
    return Date.now();
  }

  function record(type) {
    events.push({ type, t: now() });
    lastEventAt = now();
  }

  function click() {
    record("click");
  }

  function snapshot() {
    return {
      label,
      events: [...events],
      idleMs: now() - lastEventAt,
      createdAt: now()
    };
  }

  function reset() {
    events = [];
    lastEventAt = now();
  }

  return {
    click,
    snapshot,
    reset
  };
}
