import React from 'react'
import FaqSection from '../../../../components/Faq'
import { FaqPageSectionStyled, FaqPageWrapper, FaqImage } from './FaqSectionElements'

function FaqPageSection() {
    return (
        <FaqPageSectionStyled>
            <FaqPageWrapper>

                <FaqSection />
                <FaqImage>
                    <img src="images/faq_bg.png" alt="" />
                </FaqImage>
            </FaqPageWrapper>
        </FaqPageSectionStyled>
    )
}

export default FaqPageSection
