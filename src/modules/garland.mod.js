import { Module } from '../core/module'
import { createElement, getColor, getRadialGradient } from '../utils'

export class GarlandModule extends Module {
    #container
    #garlandItems

    constructor(el, iconClassName) {
        super(el, iconClassName)
        this.#container = document.querySelector('.merry-xmas')
        this.#garlandItems = []
    }

    #createGarlandItems() {
        for (let i = 0; i < 12; i++) {
            const garlandItem = createElement('span', {
                className: 'garland-item',
            })
            garlandItem.classList.add(`item-${i}`)
            garlandItem.style.backgroundColor = getColor()
            this.#goGarland(garlandItem)
            this.#garlandItems.push(garlandItem)
        }
    }

    #goGarland(item) {
        setInterval(() => {
            item.style.backgroundColor = getColor()
        }, 400)
    }

    #addGarland() {
        this.#garlandItems.forEach((item) => this.#container.append(item))
    }

    #removeGarland() {
        this.#garlandItems.forEach((item) => item.remove())
    }

    render() {
        this.el.addEventListener('click', (e) => {
            this.on = !this.on
            e.target.style.background = getRadialGradient(this.on, getColor())
            if (this.on) {
                this.#createGarlandItems()
                this.#addGarland()
            } else {
                this.#removeGarland()
                this.#garlandItems = []
            }
        })
    }
}
