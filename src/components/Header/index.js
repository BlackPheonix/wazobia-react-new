import React from 'react'
import { PrimaryHeader, UpperHeader, UpperHeaderWrapper, HeaderContact, HeaderSocialLogin, LowerHeader, LowerHeaderWrapper, Logo, Nav, LoginButton, NavIcons, MobileIcon } from './HeaderElements';


function Header() {
    return (
    <>
        <PrimaryHeader>
            <UpperHeader>
            
                   <UpperHeaderWrapper>
                    <HeaderContact>
                        <a  href="mailto:coordinator@wazobia.academy"><i class="far fa-envelope"></i>coordinator@wazobia.academy</a>
                        <a  href="tel:09088975611"><i class="fas fa-phone"></i>  0908 897 5611</a>   
                        </HeaderContact>

                        <HeaderSocialLogin>
                            <div>
                                <p>Follow us :</p>
                                <a href="https://www.facebook.com/academywazobia" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/wazobiaacademy/" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/wazobia-academy/" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </div>
                            <LoginButton>
                                <a to="authentication.html">Login / SignUp</a>
                            </LoginButton>
                        </HeaderSocialLogin>
                   </UpperHeaderWrapper>
                
            </UpperHeader>

            <LowerHeader>
              
                    <LowerHeaderWrapper>
                        <div>
                            <a t0='index'>
                            <Logo src="../images/wacademy-logo.png" alt="" />
                            </a>
                        </div>
                        
                        <MobileIcon aria-controls="primary-navigation"></MobileIcon>

                        <Nav class="nav">
                            <ul role="list">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="course.html">Courses</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="faq.html">Faq</a></li>
                                <li><a href="my-account.html">My Account</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </Nav>

                        <NavIcons>
                            <i class="fas fa-search"></i>
                            <i class="fas fa-shopping-cart"></i>
                        </NavIcons>
                    </LowerHeaderWrapper>
               
            </LowerHeader>
        </PrimaryHeader>
    </>
    )
}

export default Header
