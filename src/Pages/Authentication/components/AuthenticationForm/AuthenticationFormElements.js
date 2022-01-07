import styled from 'styled-components'
import media from '../../../../components/Media'

export const Authentication = styled.div`
    padding: 6rem 0;
`

export const AuthenticationWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    ${media.tablet`
        flex-direction: row;
        justify-content: space-between;
    `}
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;


    padding: 3rem;
    border-radius: 5px;
    box-shadow: 1px 2px 10px rgba(0,0,0, 0.15);

    h2 {
        font-size: var(--size-600);
    }

    label {
        font-weight: 500;
    }

    ${media.tablet`
        width: 100%;
        align-self: flex-start;
    `}
`

export const RegistrationForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;


    padding: 3rem;
    border-radius: 5px;
    box-shadow: 1px 2px 10px rgba(0,0,0, 0.15);

    h2 {
        font-size: var(--size-600);
    }

    label {
        font-weight: 500;
    }

    ${media.tablet`
    width: 100%;
    align-self: flex-start;
`}
`

export const AuthenticationForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    input:not([type="submit"], [type="checkbox"]) {
        font-size: var(--fs-300);
        padding: 0.6rem 0.6rem;
        border-radius: 5px;
        border: 0.7px solid hsl( var(--clr-neutral-400) / 0.2 );
        width: 100%;
    }

    ::placeholder {
        color:hsl( var(--clr-neutral-400) / 0.4 );
    }
`

export const LoginOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    

    & > div {
        display: flex;
        align-items: center;
        // justify-content: flex-start;
        gap: 0.5rem;

        label:hover {
            color: red;
        }
        
    }

    a {
        
        &:hover {
            color: hsl(var(--clr-primary-400));
        }
    }

`

export const RegistrationFormWarning = styled.div`
    p {
        font-size: 0.88rem;
        font-style: italic;
    }
`