const { DeckEncoder } = require('runeterra');

export default function DeckFromCode(code) {
  const deck = DeckEncoder.decode(code);
}
