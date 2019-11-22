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
    codeList.forEach(cardCode => {
      cardList.push(new Card(cardCode));
    });
  }
  cardList.sort((a, b) =>
    a.info.cost > b.info.cost ? 1 : a.info.cost === b.info.cost ? (a.size > b.size ? 1 : -1) : -1
  );
  return cardList;
}
