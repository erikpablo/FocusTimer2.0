import { minutes, seconds } from "./elements.js"
import state from "./state.js"
import * as timer from "./timer.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle("running")

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false 
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function more() {
    state.minutes += 5

    if(state.minutes > 60) {
        state.minutes = 60
        return;
    }

    timer.updateDisplay(state.minutes, state.seconds)
    sounds.buttonPressAudio.play()
}

export function less() {
    state.minutes -= 5

    if(state.minutes < 0) {
        state.minutes = 0
        return;
    }

    timer.updateDisplay(state.minutes, state.seconds)
    sounds.buttonPressAudio.play()
}

