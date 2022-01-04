import styled from 'styled-components'
import media from '../Media'

export const Testimonial = styled.div`
    padding: 6rem 0;
    background: #f7f7f7;
`
export const TestimonialWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 3rem;
`
export const TestimonialList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    ${media.tablet`
        flex-direction: row;
    `}
`

export const TestimonialBox = styled.div`
    width: clamp(95%, 5rem, 30%);
    background: #fff;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    border-radius: 5%  13%;
    box-shadow: 1px 3px 15px rgba(0,0,0, 0.15);

    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const TestimonialClient = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: auto;
    flex-direction: row;
    align-items: center;

    img {
        background-color: hsl( var(--clr-primary-400) / 0.6 );
        padding: 0.5rem;
        width: 3rem;
        height: 3rem;
        line-height: 3rem;
        border-radius: 50%;
        border: 3px solid hsl( var(--clr-primary-400) );
    }
`