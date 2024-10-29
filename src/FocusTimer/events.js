import { themes } from "./elements.js"

export function registerThemes() {
    themes.addEventListener('click', (event) => {
        console.log(event.target)
    })
}
