import React from 'react'
import { Footer, FooterWrapper, FooterCol, FooterAddress, FooterSocials, FooterContact, FooterLinks, Copyright, Logo } from './FooterSectionElements'



function FooterSection() {
    return (
        <Footer>
            <FooterWrapper>
                <FooterCol>
                    <Logo src="images/wacademy-logo.png" alt="" />

                    <FooterAddress>
                        <i class="fas fa-map-marker-alt"></i>
                        <p> 6-8 General Ogomudia Boulevard,<br />Lekki,Lagos.</p>
                    </FooterAddress>
                </FooterCol>
                    
                <FooterCol>
                    <h3>Quick Links</h3>
                    <FooterLinks role="list">
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Partners</a></li>
                        </FooterLinks>
                </FooterCol>

                <FooterCol>
                    <h3>Contact</h3>
                    <FooterContact>
                        <a href="mailto:coordinator@wazobia.academy"><i class="far fa-envelope"></i>coordinator@wazobia.academy</a>

                        <a href="tel:09088975611"><i class="fas fa-phone"></i> 0908 897 5611</a>
                    </FooterContact> 
                </FooterCol>

                <FooterCol>
                    <h3>Socials</h3>
                    <FooterSocials>
                        <a href="https://www.facebook.com/academywazobia" target="_blank"><i class="fab fa-facebook-f"></i></a>

                        <a href="https://www.instagram.com/wazobiaacademy/" target="_blank"><i class="fab fa-instagram"></i></a>

                        <a href="https://www.linkedin.com/company/wazobia-academy/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </FooterSocials>
                </FooterCol>
            </FooterWrapper>

            <Copyright>
                <p>© 2021 By Wazobia Academy</p>
            </Copyright>

        </Footer>
    )
}

export default FooterSection
