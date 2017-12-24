import R from "ramda";
import { ADD_CARD_TO_DECK, ADD_NEW_DECK } from "../types";
import { REHYDRATE } from "redux-persist/constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.decks || state;
    case ADD_CARD_TO_DECK:
      const deckId = action.payload.deckId;
      const pathToCards = [deckId, "cards"];

      const previousCards = R.pathOr([], pathToCards, state);
      const newCards = R.append(action.payload.card.id, previousCards);

      const lens = R.lensPath(pathToCards);

      return R.set(lens, newCards, state);
    case ADD_NEW_DECK:
      return { ...state, [action.payload.title]: action.payload };
    default:
      return state;
  }
};

export const getDecks = decks => R.values(decks);

export const getDeck = (decks, deckId) => decks[deckId];

export const getCardIdsForDeck = (decks, deckId) => decks[deckId].cards;
