import {makeAutoObservable} from "mobx";

class CounterController {
    isTimerStarted = false
    timer = 0
    attempts = 0
    successfulAttempts = 0

    constructor() {
        makeAutoObservable(this)
    }

    resetCounter = () => {
        this.isTimerStarted = false
        this.timer = 0
        this.attempts = 0
        this.successfulAttempts = 0
    }

    incrementAttempts = (isSuccessful) => {
        this.attempts++
        if (isSuccessful) {
            this.successfulAttempts++
        }
    }

    incrementTimer = (ms) => {
        this.timer += ms
    }
    startTimer = () => {
        this.isTimerStarted = true
    }
}

export default new CounterController()