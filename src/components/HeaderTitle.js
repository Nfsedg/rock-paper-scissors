import { Header } from "../templates/Header";
import { DisplayScore } from "../templates/DisplayScore";
import style from '../styles/header.module.css';


const HeaderTitle = () => {
    const mainHeader = document.createElement('div')
    mainHeader.classList.add(style.wrapper)
    mainHeader.appendChild(Header)
    mainHeader.appendChild(DisplayScore)

    return mainHeader
}

export { HeaderTitle }