import styled from 'styled-components'
import media from '../../../../components/Media'

export const FaqPageSectionStyled = styled.div`
    background: #f9f9f9;

    padding: 6rem 0;
`

export const FaqPageWrapper = styled.div`
    // padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5rem;

    padding: 4rem 2rem;

    background: hsl(var(--clr-neutral-300));

    ${media.tablet`
        flex-direction: row;
        align-items: center;
        justify-content: center;

        & > * {
            width: 100%;
        }
    `}
`

export const FaqImage = styled.div`
        display: flex; 
        justify-content: center;
`