import { myScore } from "../objects/Score"
import style from '../styles/header.module.css';

const DisplayScore = document.createElement('div')
const scoreCount = document.createElement('p')
scoreCount.innerText = myScore.getScore()
scoreCount.id = 'score';
DisplayScore.classList.add(style.score)

DisplayScore.innerHTML = `
    <h3>SCORE</h3>
    
`
DisplayScore.appendChild(scoreCount)

export { DisplayScore }