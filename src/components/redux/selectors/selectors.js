export const selectFilteredCards = (state) => {
  const { cards, searchTerm } = state.cardContent;

  if (!searchTerm.trim()) return cards;

  const query = searchTerm.toLowerCase();

  return cards.filter(
    (card) =>
      card.description.toLowerCase().includes(query) ||
      card.title.toLowerCase().includes(query)
  );
};
