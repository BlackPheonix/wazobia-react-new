import React from 'react'
import { UserAccountWelcome, UserAccountWelcomeWrapper, UserProfileWelcome, UserProfileCta, UserDetail, UserDetailWrapper, UserDetailsContent, UserDetailsSections } from './UserAccountWelcomeElements'

function UserAccountWelcomeSection() {
    return (
        <>
            <UserAccountWelcome>
                <UserAccountWelcomeWrapper>
                    <UserProfileWelcome>
                        <img class="user-avatar" src="images/blobby-green.svg" alt="" />
                        <h2>Welcome Hope Odiri</h2>
                    </UserProfileWelcome>
                    <a class="text-dark" href="course.html">
                        <UserProfileCta>
                            <p><span class="user__pro">PRO</span>Get more out of Wazobia Academy</p>
                            <p>Go deeper and learn job-ready skills with our entire course package. Earn a certificate of completion for every couse finished</p>
                        </UserProfileCta>
                    </a>
                </UserAccountWelcomeWrapper>
            </UserAccountWelcome>

            <UserDetail>
                <UserDetailWrapper>
                    <UserDetailsSections>
                        <h2 class="fs-400">My Stuff</h2>
                        <ul class="flow user-detail__list"  role="list">
                            <li class="user-details__course current">Courses</li>
                            <li class="user-details__profile">Profile</li>
                            <li class="user-details__pro-login">Pro Details</li>
                            <li class="user-details__help">Help</li>
                        </ul>
                    </UserDetailsSections>

                    <UserDetailsContent>
                        <div class="user-details__content_course user-active flow">
                            <h2>Purhcased Courses</h2>
                            <div>
                                <p>You've not purchased any course yet</p>
                            </div>
                        </div>
                        
                        <div class="user-details__content_profile flow">
                            <h2 class="fs-500">Your Profile</h2>
                            <div class="profile-details flex">
                            <div class="flow">
                                    <p>username :</p>
                                    <p>Password :</p>
                            </div>
                            <div class="flow">
                                    <p>HopeTeddie</p>
                                    <p>hope@1</p>
                            </div>
                            </div>
                            <a href="#" class="text-dark btn">Forgot Password</a>
                        </div> 

                        <div class="user-details__content_pro-login flow">
                            <h2 class="fs-500">Teach On Mars Logins</h2>
                            <div class="profile-details flex">
                            <div class="flow">
                                    <p>username :</p>
                                    <p>Password :</p>
                            </div>
                            <div class="flow">
                                    <p>HopeTeddie</p>
                                    <p>hope@1</p>
                            </div>
                            </div>
                            
                        </div> 

                        <div class="user-details__content_help flow">
                            <h2 class="fs-500">Help Points</h2>
                            <div class="help-details flex">
                            <a href="contact.html" class="btn btn-accent">Contact Us</a>
                            <a href="faq.html" class="btn btn-accent">FAQ</a>
                            <a href="https://wa.link/mnrzch" class="btn btn-accent" target="_blank">WhatsApp</a>
                            </div>
                            
                        </div> 

                    </UserDetailsContent>
                </UserDetailWrapper>
            </UserDetail>
        </>
    )
}

export default UserAccountWelcomeSection
