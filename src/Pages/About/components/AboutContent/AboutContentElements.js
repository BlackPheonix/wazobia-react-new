import styled from 'styled-components'

export const AboutContent = styled.div`
    padding: 6rem 0;
`

export const AboutContentWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    & > * + * {
        margin-top: 1rem;
    }
`

export const AboutPageContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    p{
        font-size: var(--size-500);
    }
`

export const AboutHeader = styled.div`
    & > * + * {
        margin-top: 1rem;
    }
`