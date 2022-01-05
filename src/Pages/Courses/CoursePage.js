import React from 'react'
import Courses from '../../components/Courses'
import FooterSection from '../../components/Footer'
import PageHeaderSection from '../../components/PageHeader'
import PageHeader from '../../components/PageHeader'

function Course() {
    return (
        <>
            <PageHeaderSection />
            <Courses />
            <FooterSection />
        </>
    )
}

export default Course
