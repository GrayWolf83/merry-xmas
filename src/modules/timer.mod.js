import { Module } from '../core/module'
import {
    getRadialGradient,
    createElement,
    getColor,
    getTextForTimer,
} from '../utils'

export class TimerModule extends Module {
    #container
    #interval

    constructor(el, iconClassName) {
        super(el, iconClassName)
        this.#container = createElement('div', { className: 'timer' })
        this.#container.classList.add('fade-right')
        this.#interval = null
    }

    #createTimer() {
        this.#container.textContent = ''
        this.#container.append(
            createElement('h1', {
                textContent: 'До Нового 2022 года осталось:',
            }),
            createElement('span', {
                textContent: getTextForTimer('day', [' день', ' дня', ' дней']),
            }),
            createElement('span', {
                textContent: getTextForTimer('hour', [
                    ' час',
                    ' часа',
                    ' часов',
                ]),
            }),
            createElement('span', {
                textContent: getTextForTimer('minutes', [
                    ' минута',
                    ' минуты',
                    ' минут',
                ]),
            }),
            createElement('span', {
                textContent: getTextForTimer('second', [
                    ' секунда',
                    ' секунды',
                    ' секунд',
                ]),
            }),
        )
    }

    get getHTML() {
        return this.#container
    }

    render() {
        this.#createTimer()
        this.el.addEventListener('click', (e) => {
            this.on = !this.on
            const color = getColor()
            e.target.style.background = getRadialGradient(this.on, color)
            this.#container.style.color = color
            if (this.on) {
                this.#container.classList.add('active')
                this.#interval = setInterval(() => {
                    this.#createTimer()
                }, 1000)
            } else {
                clearInterval(this.#interval)
                this.#container.classList.remove('active')
            }
        })
    }
}
