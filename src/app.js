import { TimerModule } from './modules/timer.mod'
import { createElement } from './utils'

export class App {
    #ornaments
    #timer
    #root

    constructor() {
        this.#ornaments = document.querySelectorAll('.ornament')
        this.#root = createElement('div', { className: 'root' })
        document.body.append(this.#root)
        this.#timer = new TimerModule(this.#ornaments[0], 'bi-hourglass-split')
        this.#root.append(this.#timer.getHTML)
    }

    run() {
        this.#timer.render()
    }
}
