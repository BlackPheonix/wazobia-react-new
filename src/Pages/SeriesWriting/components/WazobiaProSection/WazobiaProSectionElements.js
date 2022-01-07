import styled from 'styled-components'
import media from '../../../../components/Media'

export const WazobiaProSectionStyled = styled.div`
    padding: 6rem 0;
`

export const WazobiaProSectionStyledWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
`

export const WazobiaProFeaturesBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    img {
        width: 5rem;
        margin: auto;  
    }
`

export const WazobiaProFeatureList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${media.tablet`
        flex-direction: row;
        justify-content: space-between;
    `}
`

export const WazobiaProSectionHeader = styled.div`
    max-width: 50rem;
    width: 90%;
    text-align: center;

    h2 {
        font-size: var(--size-700);
    }

    p {
        font-size: var(--size-500);
    }

    & > * + * {
        margin-top: 1rem;
    }
`