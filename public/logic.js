import { updateState } from "./state.js";

export function runLogic() {
  const state = updateState();
  console.log("Logic executed:", state);
  return state;
}
