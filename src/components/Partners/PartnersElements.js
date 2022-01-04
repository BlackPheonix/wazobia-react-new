import styled from 'styled-components'
import media from '../Media'

export const Partners = styled.div`
    padding: 6rem 0;
`

export const PartnersWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 3rem;


`

export const PartnerList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    img {
        width: 10rem;
    }

    img:nth-child(3n) {
        width: 8rem;
    }

    ${media.tablet`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    `};
`