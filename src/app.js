import { SoundModule } from './modules/sound.mod'
import { TimerModule } from './modules/timer.mod'
import { SnowModule } from './modules/snow.mod'

import { createElement } from './utils'
import { GarlandModule } from './modules/garland.mod'
import { StarModule } from './modules/star.mod'

export class App {
    #ornaments
    #root
    #timer
    #sound
    #snow
    #garland
    #star

    constructor() {
        this.#ornaments = document.querySelectorAll('.ornament')
        this.#root = createElement('div', { className: 'root' })
        document.body.append(this.#root)
        this.#timer = new TimerModule(
            this.#ornaments[0],
            'bi-hourglass-split',
            this.#root,
        )
        this.#sound = new SoundModule(
            this.#ornaments[1],
            'bi-music-note',
            this.#root,
        )
        this.#snow = new SnowModule(this.#ornaments[2], 'bi-snow3', this.#root)
        this.#garland = new GarlandModule(
            this.#ornaments[3],
            'bi-share-fill',
            this.#root,
        )
        this.#star = new StarModule(
            this.#ornaments[4],
            'bi-star-fill',
            this.#root,
        )
    }

    run() {
        this.#timer.render()
        this.#sound.render()
        this.#snow.render()
        this.#garland.render()
        this.#star.render()
    }
}
