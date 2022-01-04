import styled from 'styled-components'
import media from '../Media'


export const Footer = styled.div`
    color: hsl(var(--clr-neutral-300));
    background: hsl(var(--clr-primary-300));
    font-size: var(--size-500);
`

export const FooterWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    padding-top: 6rem;
    padding-bottom: 6rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    ${media.tablet`
        flex-direction: row;
        gap: 4rem;
    `}
`

export const FooterCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h3 {
        font-size: var(--size-600);
    }
`

export const FooterAddress = styled.div`
    display: flex;
    gap: 1rem;
    align-items: baseline;
`

export const FooterSocials = styled.div`
    display: Flex;
    gap: 1rem;

    a {
        font-size: 1rem;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
    
        border: 2px solid white;
        border-radius: 50%;
    }
`

export const FooterLinks = styled.div`
    display: Flex;
    flex-direction: column;
    gap: 1rem;

    list-style: none;
`

export const FooterContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    i {
        margin-right: 0.75em;
    }
`

export const Copyright = styled.div`
    font-size: var(--size-400);
    text-align: center;
    padding: 1rem;
    background-color: #0d2246;
`

export const Logo = styled.img`
    width: 7rem;
`