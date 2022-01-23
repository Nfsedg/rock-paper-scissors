class Score {
    constructor() {
        this.score = 0;
    }
    incrementScore() {
        this.score = this.score + 1;

        return this.score;
    }
    getScore() {
        return this.score;
    }
}

const myScore = new Score()

export { myScore }