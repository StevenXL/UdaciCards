import R from "ramda";
import { ADD_CARD_TO_DECK, MARK_CARD_CORRECT } from "../types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_TO_DECK:
      return { ...state, [action.payload.card.id]: action.payload.card };
    case MARK_CARD_CORRECT:
      const card = state[action.payload.cardId];
      const changeset = {
        attempts: card.attempts + 1,
        correct: card.correct + 1
      };

      const newCard = R.merge(card, changeset);

      return { ...state, [card.id]: newCard };
    default:
      return state;
  }
};

// selectors
export const getCards = cards => R.values(cards);

export const getCardsWithIds = (cards, cardIds) => {
  const inCardIds = card => R.contains(card.id, cardIds);
  const cardsForDeck = R.filter(inCardIds, cards);

  return R.values(cardsForDeck);
};
