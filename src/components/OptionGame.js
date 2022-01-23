import { Rock } from "../objects/Rock";
import { Paper } from "../objects/Paper";
import { Scissors } from "../objects/Scissors";
import { myScore } from "../objects/Score";
import { GameResult } from "./GameResult";
import style from '../styles/selectOption.module.css';

const rock = new Rock();
const paper = new Paper();
const scissors = new Scissors();

const rockElement = rock.getElement();
const paperElement = paper.getElement();
const scissorsElemt = scissors.getElement();

function updateScore () {
    const scoreCount = document.getElementById("score");
    myScore.incrementScore();
    scoreCount.innerText = myScore.score;
};
function randomPick() {
  let option = Math.round(Math.random() * 2)
  switch (option) {
      case 0:
          return rock;
      case 1:
          return paper;
      case 2:
          return scissors;
      default:
          break;
  }
};

function startMatch(option) {
    const housePick = randomPick()
    OptionGame.removeChild(PickOption)

    if(option.name === housePick.name) {
        OptionGame.appendChild(GameResult(option, housePick, 'Tie'))
    } else if (option.weak === housePick.name) {
        OptionGame.appendChild(GameResult(option, housePick, 'Lose'))
    } else if (option.strong === housePick.name) {
        OptionGame.appendChild(GameResult(option, housePick, 'Win'))
        updateScore();
    }
};

rockElement.addEventListener('click', () => startMatch(rock))
paperElement.addEventListener('click', () => startMatch(paper))
scissorsElemt.addEventListener('click', () => startMatch(scissors))

const OptionGame = document.createElement('div');
const PickOption = document.createElement('div');

PickOption.classList.add(style.bodyOption)

PickOption.appendChild(paperElement);
PickOption.appendChild(scissorsElemt);
PickOption.appendChild(rockElement);

OptionGame.appendChild(PickOption)

function playAgain() {
    OptionGame.removeChild(OptionGame.lastChild);
    OptionGame.appendChild(PickOption);
}

export { OptionGame, playAgain } 