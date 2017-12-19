import R from "ramda";
import { ADD_CARD_TO_DECK } from "../types";

const decks = [{ title: "First", cards: [] }];

const initialState = R.indexBy(R.prop("title"), decks);

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_TO_DECK:
      const deckId = action.payload.deckId;
      const pathToCards = [deckId, "cards"];

      const previousCards = R.pathOr([], pathToCards, state);
      const newCards = R.append(action.payload.card.id, previousCards);

      const lens = R.lensPath(pathToCards);

      return R.set(lens, newCards, state);
    default:
      return state;
  }
};

export const getDecks = decks => R.values(decks);

export const getDeck = (decks, deckId) => decks[deckId];
