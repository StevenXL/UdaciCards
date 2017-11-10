import Ramda from "ramda";

// ONLY FOR DEVELOPMENT
const decks = [
  {
    title: "First",
    cards: [
      {
        question: "what is 1 + 2",
        answer: "3",
        stats: { attempts: 0, correct: 0 }
      }
    ]
  },
  {
    title: "Second",
    cards: [
      {
        question: "What is the capital of the U.S.",
        answer: "Washington, D.C.",
        stats: { attempts: 0, correct: 0 }
      }
    ]
  }
];

const initialState = Ramda.indexBy(deck => deck.title, decks);

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// selectors
export const getDecks = state => Ramda.values(state);
