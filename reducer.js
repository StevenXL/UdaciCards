import { combineReducers } from "redux";

import decks, * as fromDecks from "./reducers/decks";
import cards from "./reducers/cards";

export default combineReducers({ decks, cards });

// selectors
export const getDecks = state => fromDecks.getDecks(state.decks);

export const getDeck = (state, deckId) =>
  fromDecks.getDeck(state.decks, deckId);
