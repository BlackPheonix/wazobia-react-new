import styled from "styled-components";

export const Button = styled.button`
    
        cursor: pointer;
        display: inline-block;
        // margin: 0 auto;
        border: 0;
        outline: 0;
        padding: 0.7em 1.8em;
        border-radius: 5px;
        font-size: var(--size-500);
        font-weight: 700;
        text-align: center;
        text-decoration: none;

        color: hsl( var(--clr-primary-300) );
        background-color: hsl(var(--clr-primary-400));
        transition: all 0.2s;

        &:hover,
        &:focus-within {
            color: hsl( var(--clr-neutral-300) );
            background-color: hsl(var(--clr-primary-300));
        }
    
`

export const ButtonPrimaryAlt = styled(Button)`
    color: hsl( var(--clr-neutral-300) );
    background-color: hsl(var(--clr-primary-300));
    transition: all 0.2s;  

    &:hover,
    &:focus-within {
        color: hsl( var(--clr-neutral-300) );
        background-color: hsl(var(--clr-primary-300) / 0.9 );
    }
`