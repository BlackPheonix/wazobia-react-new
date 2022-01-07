import React from 'react'
import { ButtonAccent } from '../../../../components/Button'
import { CourseCta, CourseCtaWrapper, CourseCtaLearnToday, CourseCtaCertificate } from './CourseCtaElements'

function CourseCtaSection() {
    return (
        <CourseCta>
            <CourseCtaWrapper>
                <CourseCtaLearnToday>
                    <h2>Start leanring Today</h2>

                    <ButtonAccent>Buy Course<br /> &#8358;30,000</ButtonAccent>
                    
                    <p><span>2,430</span> already enrolled</p>
                </CourseCtaLearnToday>

                <CourseCtaLearnToday>
                    <h2>Get a Certificate of Completion</h2>
    
                    <p>You can share your Course Certificates in the Certifications section of your LinkedIn profile, on printed resumes, CVs, or other documents.</p>
                </CourseCtaLearnToday>

                <CourseCtaCertificate>
                    <img src="./images/certificate.jpg" alt="" />
                </CourseCtaCertificate>
            </CourseCtaWrapper>
        </CourseCta>
    )
}

export default CourseCtaSection
