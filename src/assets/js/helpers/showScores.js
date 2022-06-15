import createElement from './createElement.js';

export default (data, scoreList) => {
  const { result } = data;
  const scores = [];
  for (let i = 0; i < result.length; i += 1) {
    scores.push([result[i].user, result[i].score]);
  }
  scores.sort((a, b) => b[1] - a[1]);
  scoreList.textContent = '';

  scores.forEach((score) => {
    const listItem = createElement('li', {}, `${score[0]}: ${score[1]}`);
    scoreList.append(listItem);
  });

  if (scores.length > 10) {
    scoreList.classList.add('scroll-board');
  }
};