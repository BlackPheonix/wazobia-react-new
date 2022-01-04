import React from 'react'
import { SectionTitle } from '../Courses/CoursesElements'
import { Partners, PartnersWrapper, PartnerList } from './PartnersElements'

function PartnersSection() {
    return (
        <Partners>
            <PartnersWrapper>
                
                <SectionTitle>
                    <h2>Our Partners</h2>
                </SectionTitle>

                <PartnerList>
                    <img src="images/WE ENT color..png" alt="" />

                    <img src="images/FLNLogo.png" alt="" />

                    <img src="images/LafaaacLogo.png" alt="" />

                    <img src="images/logoAmb-Nigeěria.jpg" alt="" />
                </PartnerList>
            </PartnersWrapper>
        </Partners>
    )
}

export default PartnersSection
