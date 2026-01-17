export const state = {
  lastAction: null
};

export function setState(action) {
  state.lastAction = action;
  console.log("State updated:", state);
}