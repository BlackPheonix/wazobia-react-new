import React from 'react'
import { SectionTitle } from '../../../../components/Courses/CoursesElements'
import { AboutVideo, AboutVideoWrapper, AboutVideoImg } from './AboutVideoElements'

function AboutVideoSection() {
    return (
        <AboutVideo>
             <AboutVideoWrapper>
                <SectionTitle>
                    <h2>Start Growing With Community</h2>
                    <p>Watch Us</p>
                </SectionTitle>
                <AboutVideoImg>      
                    <a href="https://www.youtube.com/watch?v=vK2NoOoqyRo"><img src="images/play-button.png" alt="" target="_self" /></a>
                </AboutVideoImg>
            </AboutVideoWrapper>
        </AboutVideo>
    )
}

export default AboutVideoSection
