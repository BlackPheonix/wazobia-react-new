import styled from 'styled-components'
import media from '../../../../components/Media'

export const CourseModule = styled.div`
    padding: 6rem 0;
    background-color: #F7F8FA;
`

export const CourseModuleWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${media.tablet`
        flex-direction: row;
        gap: 2rem;
        padding: 0 2em;
        max-width: 80rem;
        margin: 0 auto;
    `}
`

export const CourseModuleSummarySection = styled.div`
    display: none;
    & > * + * {
        margin-top: 2rem;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        a {
            color: hsl(var(--clr-primary-300));
        }

    }

    h2 {
        font-size: 1.3rem;
        border-bottom: 1px solid rgba(33,36,44,0.16);
        padding-bottom: 1rem;
    }

    ${media.tablet`
        display: flex;
        flex-direction: column;
        position: sticky;
        top: 50px;
        height: ${props => props.height ? props.height : '350px'};
        gap: 1rem;
        width: 30%;
    `}
`

export const CoursePageModulesBox = styled.div`
    background-color: #fff;
    border: 1px solid rgba(33,36,44,0.16);
    border-radius: 5px;
    /* box-shadow: 1px 2px 10px rgba(0,0,0, 0.15); */
    padding: 1rem 1.5rem;
`

export const CourseModuleTitleBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(33,36,44,0.16);

    & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        i {
            color: #fff;
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 50%;
            background-color: hsl(var(--clr-primary-300));
        }
    }
`

export const CourseModuleList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CoursePageModules = styled.div`

    display: flex;
    flex-direction: column;
    gap: 2rem;

    ${media.tablet`
        width: 100%;
    `}
`