import { css } from 'styled-components';

const sizes = {
    uhd: 123.75,
    widescreen: 85.38,
    desktop: 64,
    tablet: 48,
}

export default Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label]}em) {
            ${css(...args)};
        }
    `

    return acc
}, {})