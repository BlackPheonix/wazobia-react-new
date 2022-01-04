import React from 'react'
import { About, AboutBox, AboutContent, AboutContentDetails } from './AboutElements'

function AboutSection() {
    return (
        <About>
            <AboutBox>
                <img src="../images/about-camera.jpg" alt="" />
            </AboutBox> 

            <AboutContent>
                    
                    <AboutContentDetails>
                        <h3>Our Mission</h3>
                        <p>To raise creative entrepreneurs with exceptional talents who would redefine the creative industry in Africa through best practices in filmmaking, Media services, audiovisual production, and content creation.</p>
                    </AboutContentDetails>
                </AboutContent>  
        </About>
    )
}

export default AboutSection
