import styled from "styled-components";
import media from '../Media'

export const Course = styled.div`
    padding: 6rem 0;
`


export const CourseWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto; 

    display: grid;
    gap: 4rem;
`


export const SectionTitle = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-size: var(--size-800);
    }

    p {
        font-size: var(--size-500);
        max-width: 60rem;
        margin-left: auto;
        margin-right: auto;
    }
`

export const CoursesList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    ${media.tablet`
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    `}
`

export const CoursesBox = styled.div`
    border-radius: 5px;
    box-shadow: 1px 3px 15px rgba(0,0,0, 0.15);

    ${media.tablet`
        width: 30%;
    `}

`

export const CoursesBoxDetails = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 2rem 2rem 2rem;
    font-size: var(--size-500);

    h3 {
        font-size: var(--size-500);
    }

    Button {
        align-self: flex-start;
    }
`

export const CoursesPrice = styled.div`
    display: flex;
    gap: 0.3rem;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid hsl( var(--clr-primary-300) / 0.2 );

    font-size: var(--size-500);

    i {
        color: hsl(var(--clr-primary-400));
    }

    p {
        font-weight: 700;
    }
`

export const CourseBtn = styled.div`
    margin: 0 auto;
`