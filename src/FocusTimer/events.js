import { controls } from "./elements.js"

export function registerControls() {
    controls.addEventListener('click', (event) => {
        let action = event.target.dataset
        console.log(action)
    })
}
