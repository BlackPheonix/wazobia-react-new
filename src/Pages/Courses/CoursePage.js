import React from 'react'
import Courses from '../../components/Courses'
import FooterSection from '../../components/Footer'
import Header from '../../components/Header'
import PageHeaderSection from '../../components/PageHeader'


function Course() {
    return (
        <>
            <Header />
            <PageHeaderSection>
                <h2>Courses</h2>
            </PageHeaderSection>
            
            <Courses />
            <FooterSection />
        </>
    )
}

export default Course
