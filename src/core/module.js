export class Module {
    constructor(el) {
        if (!el) {
            throw new Error('Please specify "el" param')
        }

        this.el = el
    }

    render() {
        throw new Error(`В модуле не определен метод 'render'`)
    }
}
