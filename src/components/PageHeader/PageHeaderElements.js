import styled from 'styled-components'

export const PageHeader = styled.div`
    background-image: url("./images/page-header.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 8rem 0;
    position: relative;

    display: grid;

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

export const PageHeaderWrapper = styled.div`
    z-index: 100;

    h2 {
        font-size: 4rem;
        color: hsl( var(--clr-neutral-300) );
        text-align: center;
    }
`