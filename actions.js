import uuidv4 from "uuid/v4";

import {
  ADD_CARD_TO_DECK,
  MARK_CARD_CORRECT,
  MARK_CARD_INCORRECT,
  ADD_NEW_DECK
} from "./types";

export const addNewCard = ({ deckId, question, answer }) => {
  const attempts = 0;
  const correct = 0;

  const card = { id: uuidv4(), question, answer, attempts, correct };

  return { type: ADD_CARD_TO_DECK, payload: { card, deckId } };
};

export const markCardCorrect = cardId => ({
  type: MARK_CARD_CORRECT,
  payload: { cardId }
});

export const markCardIncorrect = cardId => ({
  type: MARK_CARD_INCORRECT,
  payload: { cardId }
});

export const addNewDeck = deckId => ({
  type: ADD_NEW_DECK,
  payload: { title: deckId, cards: [] }
});
