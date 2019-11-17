export default class CardPick {
  constructor(cards) {
    this.cards = cards;
    this.score = CardPick.generateStaticScore(cards);
  }

  static generateStaticScore(cards) {
    let score = 0;
    cards.forEach(card => {
      score += card.score;
    });
    return score;
  }
}
