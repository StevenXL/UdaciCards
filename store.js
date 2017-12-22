import { createStore } from "redux";

import rootReducer from "./reducer";
import { rehydrateState, storeState } from "./helpers";

const rehydratedState = rehydrateState();

const store = createStore(rootReducer, rehydratedState);

store.subscribe(() => {
  const state = store.getState();
  return storeState(state);
});

export default store;
