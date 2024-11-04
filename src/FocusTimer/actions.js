import { minutes, seconds } from "./elements.js"
import state from "./state.js"
import * as timer from "./timer.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle("running")

    timer.countdown()
}

export function reset() {
    state.isRunning = false 
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function more() {
    state.minutes += 5

    if(state.minutes > 60) {
        state.minutes = 60
        return;
    }

    timer.updateDisplay(state.minutes, state.seconds)
}

export function less() {
    state.minutes -= 5

    if(state.minutes < 0) {
        state.minutes = 0
        return;
    }

    timer.updateDisplay(state.minutes, state.seconds)
}

