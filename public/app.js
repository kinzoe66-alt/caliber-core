const output = document.getElementById("output");
const button = document.getElementById("runRecon");

async function runRecon() {
  output.textContent = "Fetching recon artifact...";

  try {
    const res = await fetch("./recon.return.schema.json");
    if (!res.ok) throw new Error("Fetch failed");

    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "ERROR: " + err.message;
  }
}

button.addEventListener("click", runRecon);
