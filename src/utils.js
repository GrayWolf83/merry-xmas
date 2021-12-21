import { colors } from './constants'

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

export function getRadialGradient(on, color) {
    return on
        ? 'radial-gradient(' +
              colors[random(0, colors.length - 1)] +
              ',' +
              color +
              ',' +
              colors[random(0, colors.length - 1)] +
              ')'
        : 'radial-gradient(rgb(0, 212, 131),rgb(255, 152, 0),rgb(255, 193, 7))'
}

export function getColor() {
    return colors[random(0, colors.length - 1)]
}

export function getTextForTimer(atr, variants) {
    const num = getTimerTime(atr)

    if (num % 10 === 1 && num !== 11) {
        return num + variants[0]
    }
    if ([2, 3, 4].includes(num % 10) && ![12, 13, 14].includes(num)) {
        return num + variants[1]
    }

    return num + variants[2]
}

function getTimerTime(atr) {
    const newYearTime = new Date('2022-01-01T00:00:00')
    const date = new Date()

    switch (atr) {
        case 'day': {
            return Math.floor((newYearTime - date) / (1000 * 60 * 60 * 24))
        }
        case 'hour': {
            return Math.floor(
                ((newYearTime - date) % (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60),
            )
        }
        case 'minutes': {
            return Math.floor(
                ((newYearTime - date) % (1000 * 60 * 60)) / (1000 * 60),
            )
        }
        case 'second': {
            return Math.floor(((newYearTime - date) % (1000 * 60)) / 1000)
        }
    }
}
