import Card from './Card';

export function draftPicksFromRectangles(rectangles) {
  let cards = [];
  if (rectangles) {
    rectangles.forEach(rectangle => {
      cards.push(new Card(rectangle.CardCode));
    });
  }
  return cards;
}

export function draftPicks(cardIds) {
  let cards = [];
  cardIds.forEach(cardId => {
    cards.push(new Card(cardId));
  });
  return cards;
}
