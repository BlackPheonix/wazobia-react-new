import React from 'react'
import GlobalStyles from "../../components/Global";
import AboutSection from '../../components/About';
import ContactFormSection from '../../components/ContactForm';
import Courses from '../../components/Courses';
import FooterSection from '../../components/Footer';
import Header from '../../components/Header';
import PartnersSection from '../../components/Partners';
import ShowCase from '../../components/ShowCase';
import TestimonialSection from '../../components/Testimonial';
import { ButtonPrimaryAlt } from '../../components/Button';
import { CourseBtn, CoursesList, SectionTitle } from '../../components/Courses/CoursesElements';


function Home() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <ShowCase />
            <Courses>  
                <CourseBtn>
                    <ButtonPrimaryAlt>All Courses</ButtonPrimaryAlt>
                </CourseBtn>
            </Courses>
            <AboutSection />
            <TestimonialSection />
            <ContactFormSection />
            <PartnersSection />
            <FooterSection />
        </>
    )
}

export default Home

