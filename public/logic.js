// logic.js
// Core execution logic — no UI, no filtering, just truth

export function executeLogic(state, filter) {
  const snapshot = filter.snapshot();

  const result = {
    ok: true,
    timestamp: Date.now(),
    eventsObserved: snapshot.events.length,
    idleMs: snapshot.idleMs,
    insights: [],
  };

  if (snapshot.events.length === 0) {
    result.insights.push("No interaction detected");
  }

  if (snapshot.idleMs > 10000) {
    result.insights.push("Extended idle period detected");
  }

  return result;
}
