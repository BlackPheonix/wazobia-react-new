import React from 'react'
import FooterSection from '../../components/Footer';
import Header from '../../components/Header';
import PageHeaderSection from '../../components/PageHeader';
import PartnersSection from '../../components/Partners';
import TestimonialSection from '../../components/Testimonial';
import AboutDetailsSection from './components/AboutContent';
import AboutVideoSection from './components/AboutVideo';
import AffordableSection from './components/Affordable';


function AboutPage() {
    return (
        <>
            <Header />

            <PageHeaderSection>
                <h2>About</h2>
            </PageHeaderSection>
            <AboutDetailsSection />
            <AboutVideoSection />
            <AffordableSection />

            <TestimonialSection />
            <PartnersSection />
            <FooterSection />
        </>
    )
}

export default AboutPage
