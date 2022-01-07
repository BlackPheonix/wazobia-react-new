import React from 'react'

import FooterSection from '../../components/Footer'
import Header from '../../components/Header'
import PageHeaderSection from '../../components/PageHeader'
import ContactPageFormsSection from './components/ContactPageForms'


function ContactPage() {
    return (
        <>
            <Header />

             <PageHeaderSection>
                <h2>Contact Us</h2>
            </PageHeaderSection>
            <ContactPageFormsSection />
            <FooterSection />
        </>
    )
}

export default ContactPage
