import React from 'react'
import FooterSection from '../../components/Footer'
import Header from '../../components/Header'
import PageHeaderSection from '../../components/PageHeader'
import WazobiaProLabelSection from '../../components/WazobiaProLabel'
import CourseCtaSection from './components/CourseCta'
import CourseModuleSection from './components/CoursesModuleSection'
import WazobiaProSection from './components/WazobiaProSection'


function SeriesWritingPage() {
    return (
        <>
            <Header />
            <PageHeaderSection>
                <h2>Series Writing</h2>
            </PageHeaderSection>
           <WazobiaProLabelSection />
           <CourseModuleSection />
           <CourseCtaSection />
           <WazobiaProSection />
           <FooterSection />
        </>
    )
}

export default SeriesWritingPage
