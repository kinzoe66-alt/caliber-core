export function runUITest() {
  const status = document.getElementById("status");
  status.textContent = "Status: Button clicked. UI responding.";
  console.log("UI test ran successfully");
}
