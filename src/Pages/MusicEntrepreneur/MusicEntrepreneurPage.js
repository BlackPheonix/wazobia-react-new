import React from 'react'
import FooterSection from '../../components/Footer'
import Header from '../../components/Header'
import PageHeaderSection from '../../components/PageHeader'
import WazobiaProLabelSection from '../../components/WazobiaProLabel'
import CourseCtaSection from '../SeriesWriting/components/CourseCta'
import WazobiaProSection from '../SeriesWriting/components/WazobiaProSection'
import MusicEntrepreneurModule from './components/MusicCourseModule'

function MusicEntrepreneurPage() {
    return (
        <>
            <Header />
            <PageHeaderSection> 
                <h2>Entrepreneurship In Music
                </h2>
            </PageHeaderSection>
            <WazobiaProLabelSection />
            <MusicEntrepreneurModule />
            <CourseCtaSection />
            <WazobiaProSection />
            <FooterSection />
        </>
    )
}

export default MusicEntrepreneurPage
