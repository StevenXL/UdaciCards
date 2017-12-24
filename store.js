import { createStore } from "redux";

import rootReducer from "./reducer";
import { rehydrateState, storeState } from "./helpers";

const rehydratedState = rehydrateState();

const store = createStore(rootReducer, rehydratedState);

const getAndStoreState = () => {
  const state = store.getState();
  return storeState(state);
};

store.subscribe(getAndStoreState);

export default store;
