import React from 'react'
import FooterSection from '../../components/Footer'
import Header from '../../components/Header'
import PageHeaderSection from '../../components/PageHeader'
import AuthenticationFormSection from './components/AuthenticationForm'

function AuthenticationPage() {
    return (
        <>
            <Header/>

            <PageHeaderSection>
                <h2>Welcome to Wazobia Academy</h2>
            </PageHeaderSection>
            <AuthenticationFormSection />
            <FooterSection />
        </>
    )
}

export default AuthenticationPage
