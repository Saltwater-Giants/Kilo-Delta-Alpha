const data = require('../ext/datadragon-set1-lite/en_us/data/set1-en_us');
const scoreTemplate = require('../ext/card-score-tempalate');

export default class Card {
  constructor(id) {
    this.id = id;
    this.info = Card.findCard(id);
    this.score = Card.findStaticScore(id);
  }

  static findCard(id) {
    const cardInfo = data.find(card => {
      return card.cardCode === id;
    });
    return cardInfo;
  }

  static findStaticScore(id) {
    const cardScore = scoreTemplate.find(card => {
      return card.id === id;
    });
    if (cardScore) {
      return cardScore.score;
    }
  }
}
