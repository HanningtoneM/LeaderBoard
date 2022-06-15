import getElement from './helpers/getElement.js';
import showScores from './helpers/showScores.js';

const API_KEY = '6q0tMSor1fPfLAUVDHVJ';
const URI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores`;

export const postScores = async (user, score) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const newScore = JSON.stringify({ user, score });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: newScore,
    redirect: 'follow',
  };

  await fetch(URI, requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => error);
};

export const getScores = async () => {
  const scoreList = getElement('.score-list');
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  await fetch(URI, requestOptions)
    .then((response) => response.json())
    .then((result) => showScores(result, scoreList))
    .catch((error) => error);
};