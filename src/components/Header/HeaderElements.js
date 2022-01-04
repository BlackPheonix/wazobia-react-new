import styled from "styled-components"

export const PrimaryHeader = styled.header`
    
`

export const UpperHeader = styled.div`
    padding: 1.2rem 0;
    background: hsl(var(--clr-primary-300));


`

export const UpperHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 48em) {
        justify-content: center;
    }
`



export const HeaderContact = styled.div`

    display: flex;
    gap: 2rem;

    a {
       color : hsl(var(--clr-neutral-300));
    }

    i {
        margin-right: 0.4rem;
    }

    @media(max-width: 48em) {
        display: none;
    }

`

export const HeaderSocialLogin = styled.div`

    display: flex;
    gap: 2rem;
    align-items: center;

    div:first-child {
        display: flex;
        gap: 1rem;

        p {
            color: hsl(var(--clr-neutral-300));

            @media(max-width: 48em) {
                display: none;
            }

        }

    }
   
    a {
        color: hsl(var(--clr-neutral-300));
    }


`

export const LoginButton = styled.div`
    a {
        cursor: pointer;
        display: inline-block;
        border: 0;
        outline: 0;
        padding: 0.65em 1.8em;
        border-radius: 50px;
        font-size: var(--size-400);
        font-weight: 700;
        text-align: center;
        text-decoration: none;

        color: hsl( var(--clr-primary-300) );
        background-color: hsl(var(--clr-primary-400));
        transition: all 0.2s;

        &:hover {
            color: hsl( var(--clr-neutral-400) );
            background-color: hsl(var(--clr-neutral-300));
        }
    }
`



export const LowerHeader = styled.div`
    
`

export const LowerHeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
    overflow: hidden;
    padding: 1rem 0;
`

export const MobileIcon = styled.button`
    display: none;

    @media(max-width: 48em) {
        display: block;
        position: absolute;
        right: 4rem;
        top: 2rem;
        background: transparent;
        background-image: url("../images/icon-hamburger.svg");
        background-repeat: no-repeat;
        background-position: center;
        width: 2rem;
        aspect-ratio: 1;
        border: 0;
        cursor: pointer;
    }

`

export const Logo = styled.img`
    width: 5rem;
`

export const Nav = styled.nav`
    
    margin-left: auto;

    ul {
        display: flex;
        gap: 2rem;
    }

    a {
        color: hsl(var(--clr-primary-300));
        font-weight: 600;
    }

    @media(max-width: 48em) {
        position: absolute;
        top: 5rem;
        left: 0;
        z-index: -1000;
        width: 100%;
        padding: 2em;
        background: #fff;
       

        opacity: 0;
        transform: translateY(-130%);
        transition: all 0.3s ease-in;
    }
`

export const NavIcons = styled.div`
    display: flex;
    gap: 0.8rem;
`