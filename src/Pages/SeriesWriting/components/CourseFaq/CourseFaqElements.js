import styled from 'styled-components'

export const CourseFaq = styled.div`
    padding: 6rem 0;
    background: #f0f0f0;
`

export const CourseFaqWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    & > div:first-child {
        h2 {
            font-size: var(--size-600);
        }
    }
`

export const CourseFaqContent = styled.div`
    max-width: 60rem;
`

export const CourseFaqHelp = styled.div`
    text-align: center;
    margin-top: 1rem;
    font-size: 1.2rem;
    a {
        text-decoration: underline;

    }
`