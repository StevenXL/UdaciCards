import { ADD_CARD_TO_DECK } from "../types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_TO_DECK:
      return { ...state, [action.payload.card.id]: action.payload.card };
    default:
      return state;
  }
};
