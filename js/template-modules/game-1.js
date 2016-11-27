import createElementDOM from '../create-dom-element';
import slidesDisplay from '../display-slides';
import headerTemplate from './header';
import {gameOne, gameStats, indicators} from '../game-const';

const content = (data) =>`\
<p class="game__task">${data.task}</p>
<form class="game__content">

  ${data.question.map((question) =>`
  <div class="game__option">
    <img src="${question.image}" alt="${question.alt}" width="468" height="458">
    
    ${question.answer.map((answer) =>`
    <label class="game__answer  ${answer.class}">
      <input name="${answer.name}" type="radio" value="${answer.value}">
      <span>${answer.text}</span>
    </label>`).join('')}
    
  </div>`).join('')}
</form>`;

const stats = `\
<div class="stats">
  <ul class="stats">
    <li class="stats__result stats__result--${gameStats.wrong}"></li>    
    <li class="stats__result stats__result--${gameStats.slow}"></li>    
    <li class="stats__result stats__result--${gameStats.fast}"></li>    
    <li class="stats__result stats__result--${gameStats.correct}"></li>    
    <li class="stats__result stats__result--${gameStats.unknown}"></li>    
    <li class="stats__result stats__result--${gameStats.unknown}"></li>    
    <li class="stats__result stats__result--${gameStats.unknown}"></li>    
    <li class="stats__result stats__result--${gameStats.unknown}"></li>    
    <li class="stats__result stats__result--${gameStats.unknown}"></li>    
    <li class="stats__result stats__result--${gameStats.unknown}"></li>
  </ul>
</div>`;

const gameOneTemplate = `\
${headerTemplate(indicators)}
<div class="game">
  ${content(gameOne)}
  ${stats}
</div>`;


const gameOneElement = createElementDOM(gameOneTemplate);

const gameOneAnswer = gameOneElement.querySelectorAll('.game__answer');

for (let i = 0; i < gameOneAnswer.length; i++) {
  gameOneAnswer[i].onclick = (evt) => {
    evt.preventDefault();
    slidesDisplay(4);
  };
}

export default gameOneElement;
