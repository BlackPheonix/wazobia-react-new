import styled from 'styled-components'
import media from '../Media'

export const Contact = styled.div`
    padding: 6rem 0;
    
    display: grid;

    background-image: url("images/contact-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    
    position: relative;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: hsl(var(--clr-primary-300) / 0.8);
        z-index: 10; 
    }
`

export const ContactWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto; 

    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    z-index: 100;
    width: 100%;

    ${media.tablet`
        grid-template-columns: repeat(2, 1fr );
    `}
`

export const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    color: hsl(var(--clr-neutral-300));

    h3 {
        font-size: var(--size-800);
        text-transform: uppercase;
    }

    p {
        font-size: var(--size-500);
    }

    ${media.tablet`
        text-align: left;
    `}
`

export const ContactForm = styled.div`
    overflow: hidden;
    background: #fff;
    width: clamp(100%, 50%, 35rem);
    border-radius: 7px;

   
`

export const FormTitle = styled.div`
    background-color:hsl( var(--clr-primary-400) );
    padding: 2rem;
    text-align: center;
    font-weight: 700;

    h2 {
        font-size: var(--size-700);
    }

    p {
        font-size: var(--size-500);
        margin-top: 1rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    background: #fff;
    padding: 2.5rem;

    input {
        border: 1px solid hsl( var(--clr-primary-300) / 0.2 );
        border-radius: 5px;
        outline: 0;
        padding: 0.7rem 1rem;
        width: 100%;
        font-size: 0.85rem;
        font-weight: 400;
    }
`