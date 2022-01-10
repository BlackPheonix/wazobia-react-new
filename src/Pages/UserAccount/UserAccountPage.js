import React from 'react'
import FooterSection from '../../components/Footer'
import Header from '../../components/Header'
import PageHeaderSection from '../../components/PageHeader'
import UserAccountWelcomeSection from './components/UserAccountWelcome'

function UserAccountPage() {
    return (
        <>
            <Header />
            <PageHeaderSection>
                <h2>My Account</h2>
            </PageHeaderSection>
            <UserAccountWelcomeSection />
            <FooterSection />
        </>
    )
}

export default UserAccountPage
