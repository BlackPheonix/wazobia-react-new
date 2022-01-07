import styled from 'styled-components'
import media from '../../../../components/Media'

export const CourseCta = styled.div`
    padding: 6rem 0;

    border-bottom:  1px solid #ddd;

    h2 {
        font-size: var(--size-500);
    }
`

export const CourseCtaWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    ${media.tablet`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        & > div {
            width: 100%;
        }
    `}
`

export const CourseCtaLearnToday = styled.div`

    h2 {
        font-size: 1.4rem;
    }

     p {
        font-size: var(--size-500);
     }

    & >  * + * {
        margin-top: 1rem;
    }

    span {
        font-weight: 700;
    }
`

export const CourseCtaCertificate = styled.div`
    img {
        width: 15rem;
    }

    ${media.tablet`
        img {
            margin-left: auto;
        }
    `}
`