import style from '../styles/RulesModal.module.css';

function RulesModal (node) {
    const Modal = document.createElement('div');
    const Content = document.createElement('div');
    const button = document.createElement('button')
    
    button.onclick = function () {
        node.removeChild(Modal)
    }
    
    button.innerText = 'Return';
    Modal.classList.add(style.wrapper)
    Content.innerHTML = '<p>Working on this...</p>'
    
    Modal.append(Content, button)

    return Modal
}

export { RulesModal }