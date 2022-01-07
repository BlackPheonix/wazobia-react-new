import styled from 'styled-components'

export const Affordable = styled.div`
    background-image: url("images/affordable.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 6rem 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    position: relative;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: hsl( var(--clr-primary-300) / 0.7 );
        z-index: 10;
    }
`
export const AffordableWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 2rem;
    z-index: 100;
`

export const AffordableBox = styled.div`

    color: hsl(var(--clr-neutral-300));

    h2 {
        font-size: var(--size-800);
        line-height: 1.2;

        span  {
            color: hsl(var(--clr-primary-400));
        }
    }
`