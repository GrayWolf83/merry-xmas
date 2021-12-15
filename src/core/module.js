import { createElement } from '../utils'

export class Module {
    #icon

    constructor(el, iconClassName) {
        if (!el) {
            throw new Error('Не передан параметр "el"')
        }

        if (!iconClassName) {
            throw new Error('Не передан параметр "iconClassName"')
        }

        this.el = el
        this.on = false
        this.#icon = createElement('i', { className: 'bi' })
        this.#icon.classList.add(iconClassName)
        this.el.append(this.#icon)
    }

    get getHTML() {
        throw new Error(`В модуле не определен геттер 'getHTML'`)
    }

    render() {
        throw new Error(`В модуле не определен метод 'render'`)
    }
}
