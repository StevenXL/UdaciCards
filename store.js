import { createStore } from "redux";
import { throttle } from "lodash";

import rootReducer from "./reducer";
import { rehydrateState, storeState } from "./helpers";

const rehydratedState = rehydrateState();

const store = createStore(rootReducer, rehydratedState);

const getAndStoreState = aStore => {
  const state = store.getState();
  return storeState(state);
};

store.subscribe(throttle(getAndStoreState, 1000));

export default store;
