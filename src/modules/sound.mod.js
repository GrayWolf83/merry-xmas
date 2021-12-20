import { songs } from '../constants'
import { Module } from '../core/module'
import { getRadialGradient, createElement, getColor, random } from '../utils'

export class SoundModule extends Module {
    #container
    #root

    constructor(el, iconClassName, root) {
        super(el, iconClassName)
        this.#container = createElement('div', { className: 'sound' })
        this.#container.classList.add('fade-right')
        this.#root = root
    }

    #getSong() {
        return new Audio(songs[random(0, songs.length - 1)])
    }

    render() {
        this.el.addEventListener('click', (e) => {
            this.on = !this.on
            this.#container.textContent = ''
            const song = this.#getSong()
            const color = getColor()
            e.target.style.background = getRadialGradient(this.on, color)
            song.addEventListener('ended', () => {
                this.on = !this.on
                e.target.style.background = getRadialGradient(this.on, color)
            })
            if (this.on) {
                this.#container.append(song)
                song.play()
            } else {
                song.pause()
            }
        })
    }
}
