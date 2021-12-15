export function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function createElement(tagName, attrs) {
    const elem = document.createElement(tagName)
    for (const key in attrs) {
        elem[key] = attrs[key]
    }
    return elem
}
