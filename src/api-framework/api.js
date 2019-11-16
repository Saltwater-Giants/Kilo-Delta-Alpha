const axios = require('axios');

const PORT = 21337;

const config = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

function apiDataFormater(response) {
  console.log(response.data);
  return response.data;
}

export async function getActiveDeckList() {
  return apiDataFormater(await axios.get(`http://localhost:${PORT}/static-decklist`, config));
}

export async function getCardPositions() {
  return apiDataFormater(await axios.get(`http://localhost:${PORT}/positional-rectangles`));
}

export async function getExpeditionState() {
  return apiDataFormater(await axios.get(`http://localhost:${PORT}/expeditions-state`));
}

export async function getGameResult() {
  return apiDataFormater(await axios.get(`http://localhost:${PORT}/game-result`));
}
