// public/filter.js
// FILTER v0 — internal-only observation + JSON snapshot export
// No teaching. No preferences. Just: what happened when someone tried to learn.

const now = () => Date.now();

export function createFilter(sessionLabel = "caliber_filter_v0") {
  const session = {
    label: sessionLabel,
    startedAt: now(),
    events: [],
    counters: {
      clicks: 0,
      hovers: 0,
      idleMarks: 0,
      runTestClicks: 0,
      resets: 0
    }
  };

  let lastEventAt = session.startedAt;

  function logEvent(type, payload = {}) {
    const t = now();
    lastEventAt = t;

    session.events.push({
      t,
      type,
      ...payload
    });
  }

  function markIdle(reason = "idle_timeout") {
    session.counters.idleMarks++;
    logEvent("idle", { reason });
  }

  function hover(id) {
    session.counters.hovers++;
    logEvent("hover", { id });
  }

  function click(id) {
    session.counters.clicks++;
    logEvent("click", { id });
  }

  function runTest() {
    session.counters.runTestClicks++;
    logEvent("action", { id: "runTestBtn", action: "run_test" });
  }

  function reset() {
    session.counters.resets++;
    logEvent("action", { id: "resetBtn", action: "reset" });
  }

  // INSIGHT v0:
  // We only record conflicts or anomalies. No "preferences" yet.
  // For now, an "insight" is: rapid switching, repeated clicks, or long idle.
  function deriveInsights() {
    const insights = [];
    const ev = session.events;

    // Long idle (if marked by caller)
    const idleCount = session.counters.idleMarks;
    if (idleCount > 0) {
      insights.push({
        type: "STALL_DETECTED",
        details: { idleMarks: idleCount }
      });
    }

    // Repeated clicks on the same element
    const clickMap = {};
    for (const e of ev) {
      if (e.type === "click" && e.id) {
        clickMap[e.id] = (clickMap[e.id] || 0) + 1;
      }
    }
    for (const [id, count] of Object.entries(clickMap)) {
      if (count >= 3) {
        insights.push({
          type: "REPEAT_ACTION",
          details: { id, count }
        });
      }
    }

    // Rapid switching: many clicks within short window
    let rapid = 0;
    for (let i = 1; i < ev.length; i++) {
      const dt = ev[i].t - ev[i - 1].t;
      if (dt >= 0 && dt <= 800 && ev[i].type === "click") rapid++;
    }
    if (rapid >= 3) {
      insights.push({
        type: "RAPID_SWITCHING",
        details: { rapidClickTransitions: rapid }
      });
    }

    return insights;
  }

  // PROGRESSION v0:
  // For now, progression is simply: did they trigger runTest at least once?
  function deriveProgression() {
    const progressed = session.counters.runTestClicks > 0;
    return {
      progressed,
      reason: progressed ? "interaction_confirmed" : "no_run_test_action"
    };
  }

  function snapshot() {
    const endedAt = now();
    return {
      filter_version: "v0",
      session: {
        label: session.label,
        startedAt: session.startedAt,
        endedAt,
        durationMs: endedAt - session.startedAt
      },
      counters: session.counters,
      progression: deriveProgression(),
      insights: deriveInsights(),
      events: session.events
    };
  }

  function exportToConsole() {
    const data = snapshot();
    console.log("FILTER_SNAPSHOT", data);
    return data;
  }

  function exportToDownload(filename = "filter_snapshot.json") {
    const data = snapshot();
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    return data;
  }

  // Optional: allow caller to check idle without timers elsewhere
  function msSinceLastEvent() {
    return now() - lastEventAt;
  }

  return {
    hover,
    click,
    runTest,
    reset,
    markIdle,
    msSinceLastEvent,
    snapshot,
    exportToConsole,
    exportToDownload
  };
}