const initialState = [
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

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
