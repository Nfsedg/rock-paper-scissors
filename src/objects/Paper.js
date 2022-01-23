class Paper {
    constructor() {
        this.name = 'paper'
        this.weak = 'scissors',
        this.strong = 'rock'
    }
    play(input) {
        if(input === this.weak) {
            console.log('lose')
        } else if (input === this.strong) {
            console.log('win')
        }
    }
    getElement() {
        const wrapperElement = document.createElement('div');
        const paperElement = document.createElement('div');
        wrapperElement.classList.add('paper-image');
        wrapperElement.appendChild(paperElement)

        return wrapperElement;
    }
}

export { Paper }