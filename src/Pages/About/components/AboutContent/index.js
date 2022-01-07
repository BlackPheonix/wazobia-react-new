import React from 'react'
import { AboutContent, AboutContentWrapper, AboutPageContent, AboutHeader } from '../../../../Pages/About/components/AboutContent/AboutContentElements'

function AboutDetailsSection() {
    return (
        <AboutContent>
             <AboutContentWrapper>
                <AboutPageContent>
                    <AboutHeader>
                        <h1 class="fs-600">Welcome to Wazobia Academy</h1>

                        <p>Wazobia Academy is an innovative, accessible, and professional online training institution for individuals with a keen interest in audiovisuals, cultural, and media professions.</p>

                        <p>Birthed by leading media conglomerates Globe Broadcasting and Wazobia Max Media Limited, operators of Wazobia FM, Cool FM, Nigeria Info FM, Wazobia TV, and Wazobia Max TV. The training institution aims to equip learners with the right skills and technical knowledge to deliver optimum quality in skilled professions within the creative industry. </p>
                    </AboutHeader>
                    <div class="about__img">
                        <img src="images/about-img.jpeg" alt="" />
                    </div>
                </AboutPageContent>
                
                <AboutPageContent>
                    <div class="about__img">
                        <img src="images/14.jpg" alt="" />
                    </div>
                    <div class="about__header flow" >
                        <p>We recognize the vast talents among the African youth population and have created an enabling environment where new filmmakers, media practitioners, entrepreneurs in the cultural and creative industries have access to every knowledge, training, and support they need to realize their artistic vision. 
                        </p>

                        <p>Wazobia Academy leverages existing partnerships, professional relationships with local and international brands, and global experts across varying industries to deliver world-class training that helps learners measure up to global standards in every area of their crafts.  </p>

                        <p>Access to this training is seamless as it is available online/virtual. Learners can easily subscribe and take classes from the comfort of their homes or any location at a very minimal fee. The Basics and Advanced classes comprising well thought out curriculum are delivered by an extraordinary collection of practicing and consulting professionals in the various industries who are consistently up to date with the constantly changing practices.  </p>
                    </div>
                   
                </AboutPageContent>
            </AboutContentWrapper>
        </AboutContent>
    )
}

export default AboutDetailsSection
