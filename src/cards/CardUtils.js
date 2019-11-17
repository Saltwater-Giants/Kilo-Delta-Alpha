import Card from './Card';

export function draftPicksFromRectangles(rectangles) {
  let cardPicks = [];
  if (rectangles) {
    let picks = rectangles.reduce(
      (r, v, i, a, k = v.TopLeftX) => ((r[k] || (r[k] = [])).push(v), r),
      []
    );
    let i = 1;
    picks.forEach(pick => {
      pick.forEach(card => {
        (cardPicks[i] || (cardPicks[i] = [])).push(new Card(card.CardCode));
      });
      i++;
    });
  }
  return cardPicks;
}

export function cardUtils(cardIds) {
  let cards = [];
  cardIds.forEach(cardId => {
    cards.push(new Card(cardId));
  });
  return cards;
}
