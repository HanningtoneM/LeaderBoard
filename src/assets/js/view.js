import createElement from './helpers/createElement.js';

export default () => {
  const header = createElement('header', { class: 'header d-flex' });
  const pageHeading = createElement('h1', {}, 'Leaderboard');
  header.append(pageHeading);

  const main = createElement('main', { class: 'main d-flex' });

  const scoresDiv = createElement('div', { class: 'scores-div' });
  const scoresDivHeader = createElement('div', { class: 'd-flex scores-div-header' });
  const scoresDivHeading = createElement('h3', {}, 'Recent Scores');
  const refreshBtn = createElement('button', { class: 'refresh-button' }, 'Refresh');
  const scoreList = createElement('ul', { class: 'score-list d-flex full-width' });

  scoresDivHeader.append(scoresDivHeading, refreshBtn);
  scoresDiv.append(scoresDivHeader, scoreList);

  const formDiv = createElement('div', { class: 'form-div d-flex' });
  const formHeading = createElement('h3', { class: 'full-width' }, 'Add your score');
  const form = createElement('form', { class: 'd-flex submit-score' });
  const nameInput = createElement('input', {
    type: 'text', placeholder: 'Your name', id: 'player_name', name: 'player_name',
  });
  const scoreInput = createElement('input', {
    type: 'text', placeholder: 'Your score', id: 'player_score', name: 'player_score',
  });
  const button = createElement('input', { type: 'submit' });
  form.append(nameInput, scoreInput, button);
  formDiv.append(formHeading, form);

  main.append(scoresDiv, formDiv);
  document.body.prepend(header, main);
};