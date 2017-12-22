import { combineReducers } from "redux";

import decks, * as fromDecks from "./reducers/decks";
import cards, * as fromCards from "./reducers/cards";

export default combineReducers({ decks, cards });

// selectors
export const getDecks = state => fromDecks.getDecks(state.decks);

export const getDeck = (state, deckId) =>
  fromDecks.getDeck(state.decks, deckId);

export const getCards = state => fromCards.getCards(state.cards);

export const getCardsForDeck = (state, deckId) => {
  const cardIds = fromDecks.getCardIdsForDeck(state.decks, deckId);
  return fromCards.getCardsWithIds(state.cards, cardIds);
};
