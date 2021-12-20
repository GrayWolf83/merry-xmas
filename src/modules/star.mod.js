import { Module } from '../core/module'
import { createElement, getColor, getRadialGradient, random } from '../utils'

export class StarModule extends Module {
    #container
    #root
    #star

    constructor(el, iconClassName, root) {
        super(el, iconClassName)
        this.#container = document.querySelector('.merry-xmas')
        this.#root = root
        this.#star = document.querySelector('.star')
    }

    render() {
        this.el.addEventListener('click', (e) => {
            this.on = !this.on
            const color = getColor()
            e.target.style.background = getRadialGradient(this.on, color)
            this.#star.style.borderColor = this.on
                ? `transparent transparent ${color} transparent`
                : 'transparent transparent #ffd105 transparent'

            // if (this.on) {
            //     this.#createGarlandItems()
            //     this.#addGarland()
            // } else {
            //     this.#removeGarland()
            //     this.#garlandItems = []
            // }
        })
    }
}
