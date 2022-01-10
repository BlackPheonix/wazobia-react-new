import { useState } from 'react'
import {Link} from 'react-router-dom';
import { PrimaryHeader, UpperHeader, UpperHeaderWrapper, HeaderContact, HeaderSocialLogin, LowerHeader, LowerHeaderWrapper, Logo, Nav, LoginButton, NavIcons, MobileIcon } from './HeaderElements';


function Header() {
    const [toggleNav, setToggleNav] = useState(false);

    const handleToggleNav = () => {
        setToggleNav((prevToggleVal) => !prevToggleVal)
    }

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
                            <Link to='/'>
                            <Logo src="../images/wacademy-logo.png" alt="" />
                            </Link>
                        </div>
                        
                        <MobileIcon aria-controls="primary-navigation" onClick={handleToggleNav} navState={toggleNav} />

                    
                        <Nav navState={toggleNav}>
                            <ul role="list">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/course">Courses</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/faq">Faq</Link></li>
                                <li><Link to="/my-account">My Account</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
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
