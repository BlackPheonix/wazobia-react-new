import React from 'react'
import FooterSection from '../../components/Footer'
import Header from '../../components/Header'
import PageHeaderSection from '../../components/PageHeader'
import FaqPageSection from './components/FaqSection'

function FaqPage() {
    return (
        <>
            <Header />
            <PageHeaderSection>
                <h2>FAQ</h2>
            </PageHeaderSection>
            <FaqPageSection />
            <FooterSection />
        </>
    )
}

export default FaqPage
