import React from 'react'
import FooterSection from '../../components/Footer'
import Header from '../../components/Header'
import PageHeaderSection from '../../components/PageHeader'
import WazobiaProLabelSection from '../../components/WazobiaProLabel'
import CourseCtaSection from '../SeriesWriting/components/CourseCta'
import WazobiaProSection from '../SeriesWriting/components/WazobiaProSection'
import FashionEntrepreneurModule from './components/FashionCourseModule'

function FashionEntrepreneurPage() {
    return (
        <>
         <Header />   
         <PageHeaderSection>
             <h2>Entrepreneurship In Fashion Industry</h2>
         </PageHeaderSection>
         <WazobiaProLabelSection />
         <FashionEntrepreneurModule />
         <CourseCtaSection />
         <WazobiaProSection />
         <FooterSection />
        </>
    )
}

export default FashionEntrepreneurPage
