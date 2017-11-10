export const cardsToCardsText = cards => {
  const numberOfCards = cards.length;

  return `Cards: ${numberOfCards} ${numberOfCards === 1 ? "card" : "cards"}`;
};
