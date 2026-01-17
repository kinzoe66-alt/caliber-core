export function evaluateSnapshot(snapshot) {
  const result = {
    metrics: {
      eventCount: snapshot.events.length,
      idleMs: snapshot.idleMs
    },
    insights: [],
    status: "ok"
  };

  if (snapshot.events.length === 0) {
    result.insights.push("No interaction detected");
  }

  if (snapshot.idleMs > 10000) {
    result.insights.push("Extended idle detected");
  }

  return result;
}
