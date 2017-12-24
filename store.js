import { createStore, compose } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage } from "react-native";

import rootReducer from "./reducer";

const store = createStore(rootReducer, {}, compose(autoRehydrate()));

persistStore(store, { storage: AsyncStorage, whitelist: ["decks", "cards"] });

export default store;
