const axios = require('axios');

const PORT = 21337;

const config = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

export async function getActiveDeckList() {
  const response = await axios.get(`http://localhost:${PORT}/static-decklist`, config);
  console.log(response);
  return response;
}

export async function getCardPositions() {
  const response = await axios.get(`http://localhost:${PORT}/positional-rectangles`);
  console.log(response);
  return response;
}

export async function getExpeditionState() {
  const response = await axios.get(`http://localhost:${PORT}/expeditions-state`);
  console.log(response);
  return response;
}

export async function getGameResult() {
  const response = await axios.get(`http://localhost:${PORT}/game-result`);
  console.log(response);
  return response;
}
