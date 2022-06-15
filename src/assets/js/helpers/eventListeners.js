import { postScores, getScores } from '../leadeboardAPI.js';
import getElement from './getElement.js';

export default () => {
  const form = getElement('.submit-score');
  const refreshBtn = getElement('.refresh-button');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = event.target[0].value;
    const score = event.target[1].value;
    postScores(user, score);
    getScores();
    form.reset();
  });

  refreshBtn.addEventListener('click', () => { getScores(); });

  window.onload = () => {
    getScores();
  };
};