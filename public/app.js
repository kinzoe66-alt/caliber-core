const btn = document.getElementById("run");
const out = document.getElementById("output");

btn.addEventListener("click", async () => {
  out.textContent = "Fetching recon data...";

  try {
    const res = await fetch("./data/recon.sample.json");
    if (!res.ok) throw new Error("Fetch failed");

    const data = await res.json();

    out.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    out.textContent = "ERROR: " + err.message;
  }
});
