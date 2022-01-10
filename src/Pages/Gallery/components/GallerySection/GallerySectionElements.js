import styled from 'styled-components'
import Media from '../../../../components/Media'

export const Gallery = styled.div`
    padding: 6rem 0;
`

export const GalleryWrapper = styled.div`
    padding: 0 2em;
    max-width: 80rem;
    margin: 0 auto;

`

export const TabWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 15rem;
    margin: 0 auto;
    box-shadow: 1px 2px 10px rgba(0,0,0, 0.15);
    border-radius: 50px;
    border: 0;
    background: #fff;

`

export const GalleryTab = styled.div`
    & > * + * {
        margin-top: 3rem;
    }

    
`

export const GalleryPicture = styled.div`
    padding: 1rem;
    width: 100%;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`

export const GalleryVideo = styled.div`
    padding: 0.7rem;
    width: 100%;
    text-align: center;

    &:hover {
        cursor: pointer
    }
`

export const GalleryTabContentBody = styled.div`
    dsiplay: grid;
    gap: 1rem;
`

export const GalleryPicturesContent = styled.div`
    display: grid;
    justify-content: center;
    gap: 1rem;
    grid-column-start: 1;
    grid-row-start: 1;
    
    & > div {

        span {
            display: flex;
            width: 100%;
            overflow: hidden;
        }

        img {
            transition: all 0.3s ease;
        }

        &:hover img {
            transform: scale(1.1);
        }
    }

    ${Media.tablet`
        grid-template-columns: repeat(3, 1fr );
    `}
`

export const GalleryVideosContent = styled.div`
    display: grid;
    justify-content: center;
    gap: 1rem;
    grid-column-start: 1;
    grid-row-start: 1;

    ${Media.tablet`
        grid-template-columns: repeat(3, 1fr );
    `}
`

export const PreviewBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    max-width: 700px;
    width: 100%;
    z-index: 5;
    transform: translate(-50%, -50%) scale(0.9);
    background: #fff;
    border-radius: 3px;
    padding: 0 5px 5px 5px;
    opacity: 0;
    pointer-events: none;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
`