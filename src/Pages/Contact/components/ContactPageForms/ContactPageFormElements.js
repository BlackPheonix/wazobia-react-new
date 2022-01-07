import styled from 'styled-components'
import media from '../../../../components/Media'

export const ContactPageForms = styled.div`
    padding: 6rem 0;
`

export const ContactPageFormsWrapper = styled.div`
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

export const MainContactForm = styled.div`
    
    border-radius: 5px;
    padding: 3rem;
    box-shadow: 1px 2px 10px rgba(0,0,0, 0.15);

    & > * + * {
        margin-top: 2rem;
    }

    & > div:first-child {

        p {
            font-size: var(--size-500);
        }
    }

    & > div:first-child * + * {
        margin-top: 0.5rem;
    }

    h2 {
        font-size: var(--size-700);
    }

    ${media.tablet`
        width: 65%;
    `}
`

export const MainContactDetailsList = styled.div`
    border-radius: 5px;
    padding: 2.5rem;
    box-shadow: 1px 2px 10px rgba(0,0,0, 0.15);

    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;

    h2 {
        font-size: var(--size-700);
    }

    ${media.tablet`
        width: 35%;
    `}
`

export const MainForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

`

export const FormRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    & > div {
        width: 100%;

        input:not([type="submit"]),
        textarea,
        select {
            font-size: var(--fs-300);
            padding: 0.6rem 0.6rem;
            border-radius: 5px;
            border: 0.7px solid hsl( var(--clr-neutral-400) / 0.2 );
            width: 100%;
        }

        ::placeholder {
            color:hsl( var(--clr-neutral-400) / 0.4 );
        }

        // select {
        //     -moz-appearance: inherit
        //     -webkit--appearance:
        // }
    }

    ${media.tablet`
        flex-direction: row;
    `}

`

export const MainContactDetail = styled.div`
    & > * + * {
        margin-top: 1.2rem;
    }

    i {
        margin-right: 1em;
    }
`

export const MainContactBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 1em;
    border-bottom: 0.7px solid hsl( var(--clr-neutral-400) / 0.1 );


`

export const MainContactMap = styled.div`
    iframe {
        border: 0;
    }
`

export const Input50 = styled.div`


`