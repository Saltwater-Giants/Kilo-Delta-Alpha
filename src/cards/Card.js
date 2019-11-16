const data = require('./set1-en_us');

export default class Card {
  constructor(id) {
    this.id = id;
    this.info = Card.findCard(id);
    this.score = 0;
  }

  static findCard(id) {
    const cardInfo = data.find(card => {
      return card.cardCode === id;
    });
    return cardInfo;
  }
}
