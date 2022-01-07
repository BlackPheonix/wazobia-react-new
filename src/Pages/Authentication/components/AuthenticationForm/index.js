import React from 'react'
import { ButtonPrimaryAlt } from '../../../../components/Button'
import { Authentication, AuthenticationWrapper, LoginForm, AuthenticationForm, RegistrationForm, LoginOptions, RegistrationFormWarning } from './AuthenticationFormElements'

function AuthenticationFormSection() {
    return (
        <Authentication>
            <AuthenticationWrapper>

                <LoginForm>
                    <h2>Login</h2>

                    <AuthenticationForm>

                            <div>
                                <label for="username">Username or email</label>
                                <input type="text" placeholder="Username or email" />
                            </div>

                            <div>
                                <label for="username">Password</label>
                                <input type="password" placeholder="Password" />
                            </div>

                            <LoginOptions>
                                <div>
                                    <input type="checkbox" id="test2" />
                                    <label for="test2">Remember Me</label> 
                                </div>

                                <a href="#">Lost your password?</a>
                            </LoginOptions>


                        <div>
                            <ButtonPrimaryAlt type="submit">Submit</ButtonPrimaryAlt>
                        </div>

                    </AuthenticationForm>
                </LoginForm>  


                <RegistrationForm>

                        <h2>Registration</h2>

                    <AuthenticationForm>

                            <div>
                                <label class="text-dark" for="username">Username</label>
                                <input type="text" placeholder="Last Name" />
                            </div>


                            <div>
                                <label class="text-dark" for="username">Email</label>
                                <input type="email" placeholder="Email" />
                            </div>



                            <div>
                                <label class="text-dark" for="username">Password</label>
                                <input type="password" placeholder="Password" />
                            </div>



                            <RegistrationFormWarning>
                                <p>The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>
                            
                            </RegistrationFormWarning>
                        

                        <div>
                            <ButtonPrimaryAlt type="submit">Submit</ButtonPrimaryAlt>
                        </div>

                    </AuthenticationForm>
                </RegistrationForm>  


            </AuthenticationWrapper>
        </Authentication>
    )
}

export default AuthenticationFormSection
