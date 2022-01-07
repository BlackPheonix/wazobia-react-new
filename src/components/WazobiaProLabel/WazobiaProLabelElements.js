import styled from 'styled-components'
import media from '../Media'

export const WazobiaProLabel = styled.div`
    padding: 0.75rem 0;
    background: rgb(36,61,153);
    background: linear-gradient(90deg, rgba(36,61,153,1) 0%, rgba(31,41,136,1) 34%, rgba(12,19,71,1) 100%);

    color: hsl(var(--clr-neutral-300));

`

export const WazobiaProLabelWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    font-size: 0.9rem;

    & div:first-child {
        span {
            padding: 1px 5px;
            font-weight: 700;
            color: #333;
            background: #fff;
            border-radius: 4px;
        }
    }

    & div:last-child {
        a {
            text-decoration: underline;

            &:hover {
                color: hsl(var(--clr-primary-400));
            }
        }
    }

    ${media.tablet`
        flex-direction: row;
        gap: 3rem;
    `}
`