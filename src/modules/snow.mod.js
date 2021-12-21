import { Module } from '../core/module'
import { createElement, random } from '../utils'

export class SnowModule extends Module {
    #container
    #intervall

    constructor(el, iconClassName) {
        super(el, iconClassName)
        this.#container = createElement('div', { className: 'snow' })
        this.#intervall = null
    }

    #createSnow() {
        const snowElement = createElement('i', { className: 'bi' })
        snowElement.classList.add('bi-snow3')
        snowElement.style.fontSize = random(5, 14) + 'px'
        snowElement.style.color = '#81d4fa'
        snowElement.style.position = 'absolute'
        snowElement.style.top = '0px'
        snowElement.style.left = random(10, 90) + '%'
        snowElement.style.zIndex = 10
        this.#container.append(snowElement)
        this.#goSnow(snowElement)
    }

    #goSnow(item) {
        let countTop = 0
        const heightCount = this.#container.getBoundingClientRect().bottom

        setInterval(() => {
            countTop += 1
            if (countTop > heightCount) {
                item.remove()
            } else {
                item.style.top = countTop + 'px'
                item.style.transform = `rotate(${countTop * 1.5}deg)`
            }
        }, random(50, 80))
    }

    render() {
        this.el.addEventListener('click', (e) => {
            this.on = !this.on
            e.target.classList.add('active')
            e.target.style.background = this.on
                ? 'radial-gradient(#81d4fa,#2eb4f1,#1f7299)'
                : 'radial-gradient(rgb(0, 212, 131),rgb(255, 152, 0),rgb(255, 193, 7))'
            if (this.on) {
                document.body.append(this.#container)
                this.#intervall = setInterval(() => {
                    this.#createSnow()
                }, 800)
            } else {
                clearInterval(this.#intervall)
            }
        })
    }
}
