import styled from 'styled-components'
import media from '../../../../components/Media'

export const UserAccountWelcome = styled.div`
    background: #F7F5F4;
    padding-top: 1rem;
    padding-bottom: 3rem;
`

export const UserAccountWelcomeWrapper = styled.div`
    padding: 0 2em;
    max-width: 60rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const UserProfileWelcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2 {
        font-size: var(--size-600);
    }

    img {
        width: 5rem;
    }

        
    ${media.tablet`
        flex-direction: row;
    `}

`

export const UserProfileCta = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    border: 1.2px solid #000;
    font-size: 0.859em;
    box-shadow: -10px 9px 0px #000;
    
    background: #fff;
    padding: 1rem;

    font-size: 0.95rem;

    & > p:first-child {
        span {
            font-weight: 600;
            font-size: 1.5rem;
            margin-right: 0.5rem;
        }
    }

    &:hover {
        cursor: pointer;
        box-shadow: -10px 9px 0px #000;
    }
`

export const UserDetail = styled.div`
    padding: 1rem 0;
`

export const UserDetailWrapper = styled.div`
    padding: 0 2em;
    max-width: 70rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${media.tablet`
        flex-direction: row;
    `}
`

export const UserDetailsContent = styled.div`
    position: relative;
    width: 100%;
    height: 18rem;

    & > div {
        position: absolute;
        top: 0;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }
`

export const UserDetailsSections = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    border-bottom: 1px solid #333;

    h2 {
        padding: 0.4rem;
        padding-left: 1.5rem;
    }

    ul li {
        cursor: pointer;
        padding: 0.4rem;
        padding-left: 1.5rem;
    }

    ${media.tablet`
        width: 25%;
        border-right: 1px solid #333;
        border-bottom: 0;  
    `}
`