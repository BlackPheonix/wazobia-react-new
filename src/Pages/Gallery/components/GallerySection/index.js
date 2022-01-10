import React from 'react'
import { Gallery, GalleryWrapper, TabWrapper, GalleryPicture, GalleryVideo, GalleryTab, GalleryTabContentBody, GalleryPicturesContent, GalleryVideosContent, PreviewBox } from './GallerySectionElements'

function GallerySection() {
    return (
        <Gallery>
            <GalleryWrapper>
                <GalleryTab>
                    <TabWrapper>
                        <GalleryPicture>
                            Picture
                        </GalleryPicture>
                        <GalleryVideo>
                            Video
                        </GalleryVideo>
                    </TabWrapper>

                <GalleryTabContentBody>

                    <GalleryPicturesContent>

                        <div class="image"><span><img src="./images/gallery-images/1.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/2.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/3.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/4.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/5.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/6.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/7.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/8.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/9.jpg" alt="" /></span></div>
                        <div class="image"><span><img src="./images/gallery-images/10.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/11.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/12.jpg" alt="" /></span></div>
  
                    </GalleryPicturesContent>

                    <PreviewBox>
                        <div class="details">
                            <span class="title">
                                Image <p class="current-img"></p>
                                of <p class="total-img"></p>
                            </span>
                            <span class="icon fas fa-times"></span>
                        </div>
                        <div class="img-box">
                            <div class="slide prev">
                                <i class="fas fa-angle-left"></i>
                            </div>
                            <div class="slide next">
                                <i class="fas fa-angle-right"></i>
                            </div>
                            <img src="" alt="" />
                        </div>
                    </PreviewBox>
                   

                    <GalleryVideosContent>

                        <div class="image"><span><img src="./images/gallery-images/13.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/14.jpg" alt="" /></span></div>

                        <div class="image"><span><img src="./images/gallery-images/14.jpg" alt="" /></span></div>
                    </GalleryVideosContent>

                </GalleryTabContentBody>

                </GalleryTab>
            </GalleryWrapper>
        </Gallery>
    )
}

export default GallerySection
