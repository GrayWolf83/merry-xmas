import { Module } from '../core/module'
import { createElement, getColor, getRadialGradient } from '../utils'

export class GiftdModule extends Module {
    #container
    #root
    #gifts

    constructor(el, iconClassName) {
        super(el, iconClassName)
        this.#root = document.querySelector('.merry-xmas')
        this.#container = createElement('div', { className: 'gifts' })
        this.#container.classList.add('fade-left')
        this.#gifts = []
    }

    #createGifts() {
        this.#gifts = []
        for (let i = 1; i < 5; i++) {
            const gift = createElement('i', { className: 'bi' })
            gift.classList.add('bi-gift-fill')
            gift.classList.add('gift')
            gift.style.color = getColor()
            this.#gifts.push(gift)
        }
    }

    #addGifts() {
        this.#container.textContent = ''
        this.#gifts.forEach((gift) => this.#container.append(gift))
        this.#root.append(this.#container)
    }

    render() {
        this.el.addEventListener('click', (e) => {
            this.on = !this.on

            const color = getColor()
            e.target.style.background = getRadialGradient(this.on, color)
            if (this.on) {
                this.#createGifts()
                this.#addGifts()
                setTimeout(() => {
                    this.#container.classList.add('active')
                }, 0)
            } else {
                this.#container.classList.remove('active')
            }
        })
    }
}
