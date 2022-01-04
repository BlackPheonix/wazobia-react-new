import styled from "styled-components"
import media from '../Media'

export const About = styled.div`
    display: flex;
    flex-direction: column;

    ${media.tablet`
        flex-direction: row;
    `}
`

export const AboutBox = styled.div``

export const AboutContent = styled.div`

    background-image: url("../images/film-set.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;

    color: hsl(var(--clr-neutral-300));
    padding: 7rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: hsl(var(--clr-primary-300) / 0.8);
        z-index: 100;
    }

`

export const AboutContentDetails = styled.div`
    z-index: 1000;
    padding: 0 2rem;
    text-align: center;

    & > * + * {
        margin-top: 1rem;
    }

    h3 {
        font-size: var(--size-800);
    }

    p {
        font-size: var(--size-500);
    }
`