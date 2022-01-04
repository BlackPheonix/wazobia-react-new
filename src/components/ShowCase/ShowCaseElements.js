import styled from "styled-components";


export const Showcase = styled.div`
    background-image: url("../images/camera-desktop.jpg");
    background-size: cover;
    background-position: center center;
    height: 75.9vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    position: relative;

    display: flex;
    

    &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0, 0.3);
        z-index: 1;
    }
`

export const ShowCaseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #fff;
    z-index: 10;

    h1 {
        font-size: var(--size-1000);
    }

    p {
        font-size: var(--size-700);
    }
`