import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    // Box Sizing

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    // Customize Properties

    :root {
        //  colors

        --clr-primary-300: 218 67% 18%;
        --clr-primary-400: 47 100% 53%;

        --clr-neutral-300: 0 0% 100%;
        --clr-neutral-400: 204 11% 18%;
        --clr-neutral-500: 223 17% 15%;

        // Font Size

        --size-300: clamp(0.7rem, 0.66rem + 0.2vw, 0.8rem);
        --size-400: clamp(0.88rem, 0.83rem + 0.24vw, 1rem);
        --size-500: clamp(1.09rem, 1rem + 0.47vw, 1.33rem);
        --size-600: clamp(1.37rem, 1.21rem + 0.8vw, 1.78rem);
        --size-700: clamp(1.71rem, 1.45rem + 1.29vw, 2.37rem);
        --size-800: clamp(2.14rem, 1.74rem + 1.99vw, 3.16rem);
        --size-900: clamp(2.67rem, 2.07rem + 3vw, 4.21rem);
        --size-1000: clamp(3.34rem, 2.45rem + 4.43vw, 5.61rem);
          

        // Font Families

        /* font-families */
        --ff-300: 'Roboto', sans-serif;
        --ff-400: 'Lato', sans-serif;
    }

    // html

    html {
        scroll-behaviour: smooth;
    }

    // body setup

    body {
        font-family: var(--ff-300);
        font-size: var(--size-400);
        font-weight: 400;
        color: var(--clr-neutral-400);
        background-color: hsl(var(--clr-neutral-300));
        line-height: 1.5;
        min-height: 100vh;
        text-rendering: optimizeSpeed;
    }

    // Headings

    h1,
    h2,
    h3,
    h4 {
        font-family: var(--ff-400);
        line-height: 1.05;
    }

    // Images 

    img,
    picture {
        display: block;
        max-width: 100%;
        height: auto;
    }

    // Form Elements 
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    a {
        text-decoration: none;
        color: unset;
    }

    ul,
    ol {
        list-style: none;
    }

    // remove animations for people who've turned them off 
    @media (prefers-reduced-motion: reduce) {

        html {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
   
`

export default GlobalStyles