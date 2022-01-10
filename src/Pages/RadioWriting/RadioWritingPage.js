import React from 'react'
import FooterSection from '../../components/Footer'
import Header from '../../components/Header'
import PageHeaderSection from '../../components/PageHeader'
import WazobiaProLabelSection from '../../components/WazobiaProLabel'
import CourseCtaSection from '../SeriesWriting/components/CourseCta'
import CourseFaqSection from '../SeriesWriting/components/CourseFaq'
import WazobiaProSection from '../SeriesWriting/components/WazobiaProSection'
import RadioCourseModule from './components/RadioCourseModule'

function RadioWritingPage() {
    return (
        <>
            <Header />
            <PageHeaderSection>
                <h2>Writing For Radio</h2>
            </PageHeaderSection>
            <WazobiaProLabelSection />
            <RadioCourseModule />
            <CourseCtaSection />
            <WazobiaProSection />
            <CourseFaqSection />
            <FooterSection />
        </>
    )
}

export default RadioWritingPage
