class GuessingGame {
    constructor() {}

    actualNumber = 0;

    setRange(min, max) {
     this.maxNumber = max;
     this.minNumber = min;
    }

    guess() {
        return this.actualNumber = Math.ceil(this.minNumber/2 + this.maxNumber/2);
    }

    lower() {
       this.maxNumber = this.actualNumber
    }

    greater() {
       this.minNumber = this.actualNumber
    }
}

module.exports = GuessingGame;
