const output = document.getElementById('output');

fetch('./recon.return.schema.json')
  .then(res => {
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.json();
  })
  .then(data => {
    output.textContent = JSON.stringify(data, null, 2);
  })
  .catch(err => {
    output.textContent = 'FETCH ERROR: ' + err.message;
  });
