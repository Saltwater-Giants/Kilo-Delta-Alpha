import Card from './Card';
import { isEmpty } from '../utils/util';

const { DeckEncoder } = require('runeterra');

export function deckFromCode(code) {
  if (code) {
    const deck = DeckEncoder.decode(code);
    console.log(deck);
  }
}

export function deckFromCardCodeList(codeList) {
  let cardList = [];
  if (!isEmpty(codeList)) {
    codeList.forEach(cardCode => {
      cardList.push(new Card(cardCode));
    });
  }
  return cardList;
}
