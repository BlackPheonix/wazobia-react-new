import styled from 'styled-components'

export const Faq = styled.div`
    background: #f9f9f9;
`

export const FaqWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    background: hsl(var(--clr-neutral-300));
` 

export const FaqList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
`

export const AccordionItemHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 10px;
    background: #f9f9f9;

    h3 {
        font-weight: 400;
    }

    i {
        background: #fff;
        width: 2.5rem;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        border-radius: 50%;
    
        transition: transform 0.2s ease-in-out;
    }
`

export const AccordionBody = styled.div`
    max-height: 0;
    overflow: hidden;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #f7f7f7;
    transition: max-height 0.2s ease-out;
`


export const AccordionBodyContent = styled.div`
    padding: 1rem 2rem;

    p {
        font-size: 1.05rem;
    }
`

