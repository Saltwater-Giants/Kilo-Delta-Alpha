import Card from './Card';
import { isEmpty } from '../utils/util';

const { DeckEncoder } = require('runeterra');

//not finished
export function deckFromCode(code) {
  if (code) {
    const deck = DeckEncoder.decode(code);
  }
}

export function deckFromCardCodeList(codeList) {
  const cardList = [];
  if (!isEmpty(codeList)) {
    const counts = {};
    codeList.forEach(function(x) {
      counts[x] = (counts[x] || 0) + 1;
    });

    Object.keys(counts).forEach((cardCode, index) => {
      cardList.push({ card: new Card(cardCode), count: counts[cardCode] });
    });
    cardList.sort((a, b) =>
      a.card.info.cost > b.card.info.cost
        ? 1
        : a.card.info.cost === b.card.info.cost
        ? a.card.info.name > b.card.info.name
          ? 1
          : -1
        : -1
    );
  }
  return cardList;
}
