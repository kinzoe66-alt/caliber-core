// logic.js — core truth engine

export function evaluateSnapshot(snapshot) {
  const result = {
    insights: [],
    metrics: {}
  };

  if (!snapshot || typeof snapshot !== "object") {
    result.insights.push("Invalid snapshot");
    return result;
  }

  const events = snapshot.events || [];
  const idleMs = snapshot.idleMs || 0;

  result.metrics.eventCount = events.length;
  result.metrics.idleMs = idleMs;

  if (events.length === 0) {
    result.insights.push("No interaction detected");
  }

  if (idleMs > 10000) {
    result.insights.push("Extended idle detected");
  }

  const clicks = events.filter(e => e.type === "click").length;
  if (clicks === 0 && events.length > 0) {
    result.insights.push("Passive behavior without commitment");
  }

  return result;
}
