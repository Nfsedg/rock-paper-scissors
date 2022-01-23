class Rock {
    constructor() {
        this.name = 'rock'
        this.weak = 'paper',
        this.strong = 'scissors'
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
        const rockElement = document.createElement('div')
        wrapperElement.classList.add('rock-image')
        wrapperElement.appendChild(rockElement)

        return wrapperElement;
    }
}

export { Rock }