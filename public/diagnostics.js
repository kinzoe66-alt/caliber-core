export function log(diags, message, level = "info") {
  diags.push({
    level,
    message,
    time: new Date().toISOString()
  });
}
