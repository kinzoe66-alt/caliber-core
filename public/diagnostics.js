// diagnostic.js
(function () {
  console.log("✅ Diagnostic JS loaded");

  document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOMContentLoaded");

    // Basic heartbeat
    window.__DIAGNOSTIC_OK__ = true;

    // Report visible state
    console.log("📦 Diagnostic state:", {
      location: window.location.href,
      readyState: document.readyState,
      time: new Date().toISOString()
    });
  });

  // Catch runtime errors
  window.addEventListener("error", (e) => {
    console.error("❌ Runtime error:", e.message, e.filename, e.lineno);
  });
})();