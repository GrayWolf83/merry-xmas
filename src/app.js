import { SoundModule } from './modules/sound.mod'
import { TimerModule } from './modules/timer.mod'
import { SnowModule } from './modules/snow.mod'
import { createElement } from './utils'
import { GarlandModule } from './modules/garland.mod'
import { BackgroundModule } from './modules/background.mod'
import { GiftdModule } from './modules/gift.mod'

export class App {
    #ornaments
    #root
    #timer
    #sound
    #snow
    #garland
    #bg
    #gift

    constructor() {
        this.#ornaments = document.querySelectorAll('.ornament')
        this.#root = createElement('div', { className: 'root' })
        document.body.append(this.#root)
        this.#timer = new TimerModule(
            this.#ornaments[0],
            'bi-alarm-fill',
            this.#root,
        )
        this.#sound = new SoundModule(this.#ornaments[1], 'bi-music-note')
        this.#snow = new SnowModule(this.#ornaments[2], 'bi-snow3')
        this.#garland = new GarlandModule(this.#ornaments[3], 'bi-share-fill')
        this.#bg = new BackgroundModule(this.#ornaments[4], 'bi-palette-fill')
        this.#gift = new GiftdModule(this.#ornaments[5], 'bi-gift-fill')
    }

    run() {
        this.#timer.render()
        this.#sound.render()
        this.#snow.render()
        this.#garland.render()
        this.#bg.render()
        this.#gift.render()
    }
}
