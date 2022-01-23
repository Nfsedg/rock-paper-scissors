import { OptionGame } from "./components/OptionGame";
import { HeaderTitle } from "./components/HeaderTitle";
import { RulesModal } from "./components/RulesModal";

const app = () => {
    const bodyApp = document.createElement('div');    
    const titleScoreHeader = document.createElement('header');
    const buttonRules = document.createElement('button');

    titleScoreHeader.appendChild(HeaderTitle());

    buttonRules.innerText = "Rules";
    buttonRules.classList.add('buttonRules')
    buttonRules.onclick = function() {
        bodyApp.appendChild(RulesModal(bodyApp))
    }
    bodyApp.append(titleScoreHeader, OptionGame, buttonRules);

    return bodyApp;
};


export { app } 