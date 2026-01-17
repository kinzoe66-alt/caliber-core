export const state = {
  status: "idle",
  checkpoint: null,
  lastRun: null,
  diagnostics: []
};

export function setState(update) {
  Object.assign(state, update);
}
