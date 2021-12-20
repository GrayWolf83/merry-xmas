import { Module } from '../core/module'
import { createElement, getColor, getRadialGradient, random } from '../utils'

export class GarlandModule extends Module {
    #container
    #root
    #intervall
    #garlandItems

    constructor(el, iconClassName, root) {
        super(el, iconClassName)
        this.#container = document.querySelector('.merry-xmas')
        this.#root = root
        this.#intervall = null
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
            const color = getColor()
            e.target.style.background = getRadialGradient(this.on, color)
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
