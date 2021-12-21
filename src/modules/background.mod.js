import { Module } from '../core/module'
import { getColor, getRadialGradient } from '../utils'

export class BackgroundModule extends Module {
    constructor(el, iconClassName) {
        super(el, iconClassName)
    }

    render() {
        this.el.addEventListener('click', (e) => {
            this.on = !this.on
            const color = getColor()
            e.target.style.background = getRadialGradient(this.on, color)
            document.body.style.background = this.on
                ? `linear-gradient(90deg, ${color} 0%, ${getColor()} 100%)`
                : 'none'
        })
    }
}
