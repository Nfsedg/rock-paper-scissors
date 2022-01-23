import { app } from './app'
import style from './styles/globals.module.css'
import './styles/globalStyle.css'

const root = document.getElementById('root')

root.appendChild(app())

root.classList.add(style.body)

console.log('live')