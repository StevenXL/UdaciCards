import uuidv4 from "uuid/v4";

import { ADD_CARD_TO_DECK } from "./types";

export const addNewCard = ({ deckId, question, answer }) => {
  const card = { id: uuidv4(), question, answer };

  return { type: ADD_CARD_TO_DECK, payload: { card, deckId } };
};
