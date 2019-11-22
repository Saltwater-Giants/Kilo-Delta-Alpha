import Card from './Card';

function getCardsByRectanglesXCoord(rectangles) {
  const cardPicks = [];
  if (rectangles) {
    const picks = rectangles.reduce(
      (r, v, i, a, k = v.TopLeftX) => ((r[k] || (r[k] = [])).push(v), r),
      []
    );
    let i = 0;
    picks.forEach(pick => {
      pick.forEach(card => {
        (cardPicks[i] || (cardPicks[i] = [])).push(new Card(card.CardCode));
      });
      i += 1;
    });
  }
  return cardPicks;
}

export function draftPicksFromRectangles(rectangles) {
  const cardPicks = getCardsByRectanglesXCoord(rectangles);
  if (cardPicks.length === 4) {
    cardPicks.shift();
  }
  return cardPicks;
}

export function draftTradesFromRectangles(rectangles) {
  const cardPicks = getCardsByRectanglesXCoord(rectangles);
  const cardTrades = [];
  if (cardPicks.length === 3) {
    cardPicks.shift();
    cardPicks[0].forEach((card, i) => {
      (cardTrades[i] || (cardTrades[i] = [])).push(card);
      (cardTrades[i] || (cardTrades[i] = [])).push(cardPicks[1][i]);
    });
  }
  return cardTrades;
}

export function cardUtils(cardIds) {
  let cards = [];
  cardIds.forEach(cardId => {
    cards.push(new Card(cardId));
  });
  return cards;
}
