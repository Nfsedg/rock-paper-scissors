import { playAgain } from './OptionGame';
import style from '../styles/gameResult.module.css';

function GameResult(userPick, housePick, result) {

    const wrapper = document.createElement('div');
    const userDiv = document.createElement('div');
    const houseDiv = document.createElement('div');
    const againButton = document.createElement('button')

    wrapper.classList.add(style.resultBody);
    userDiv.classList.add(style.userResult);
    houseDiv.classList.add(style.houseResult);
    againButton.classList.add(style.againButton);

    againButton.innerText = 'Again';
    againButton.onclick = playAgain;

    wrapper.classList.add('wrapper-pick')
    try {
        wrapper.innerHTML = `<p>${result}</p>`;
        userDiv.appendChild(userPick.getElement())
        houseDiv.appendChild(housePick.getElement())
    } catch {
        console.error('Incorrect input option')
    }

    wrapper.append(userDiv, houseDiv, againButton);

    return wrapper;
}

export { GameResult };