let state = {
  clicks: 0
};

export function increment() {
  state.clicks++;
  return state.clicks;
}