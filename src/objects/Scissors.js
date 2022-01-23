class Scissors {
    constructor() {
        this.name = 'scissors'
        this.weak = 'rock',
        this.strong = 'paper'
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
        const scissors = document.createElement('div');
        wrapperElement.classList.add('scissors-image');
        wrapperElement.appendChild(scissors)

        return wrapperElement;
    }
}

export { Scissors }