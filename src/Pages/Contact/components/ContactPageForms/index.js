import React from 'react'
import { Button, ButtonPrimaryAlt } from '../../../../components/Button'
import { ContactPageForms, ContactPageFormsWrapper, MainContactForm, MainContactDetailsList, MainForm, FormRow, MainContactDetail, MainContactBox, MainContactMap, Input50 } from './ContactPageFormElements'

function ContactPageFormsSection() {
    return (
        <ContactPageForms>
            
            <ContactPageFormsWrapper>

                    <MainContactForm>
                        <div class="flow">
                            <h2>Reach Out To Us</h2>
                            <p>Send us a message</p>
                        </div>

                        <MainForm>
        
                            <FormRow>  
                                <div class="input50">
                                    <input type="text" placeholder="Last Name" />
                                </div>

                                <div class="input50">
                                    <input type="text" placeholder="First Name" />
                                </div>
                            </FormRow>
        
                            <FormRow>   
                                <Input50>
                                    <input type="email" placeholder="Email" />
                                </Input50>

                                <Input50>
                                    <input type="number" placeholder="WhatsApp Number" />
                                </Input50>
                            </FormRow>
        
                            <FormRow>
                                <div class="input50">
                                    <input type="text" placeholder="Subject" />
                                </div>

                                <div class="input50">
                                    <select name="trainings" form="main-form">
                                        <option value="radio host course">Wazobia Pro</option>
    
                                        <option value="radio host course">Entrepreneurship In Music</option>
    
                                        <option value="radio host course">Series Writing</option>
    
                                        <option value="radio host course">Writing for Radio</option>

                                        <option value="radio host course">Entrepreneurship In The Fashion Industry</option>
                                    </select>
                                </div>
                            </FormRow>

                            
                            <FormRow>       
                                <div class="input100">
                                    <textarea name="your-message" id="" cols="30" rows="5" placeholder="Your Message"></textarea>
                                </div>
                            </FormRow>
        
                            <div>
                                <ButtonPrimaryAlt type="submit">Submit</ButtonPrimaryAlt>
                            </div>
         
                        </MainForm>
                    </MainContactForm>     
                    
                    <MainContactDetailsList>
                        <div>
                            <h2 class="fs-600">Address</h2>
                        </div>

                       <MainContactDetail>

                            <MainContactBox>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>267A Etim Inyang Crescent,
                                    Victoria Island, 
                                    Lagos.</span>
                            </MainContactBox>

                            <MainContactBox>
                                <a class="text-dark main-contact--address" href="mailto:coordinator@wazobia.academy"><i class="far fa-envelope"></i>coordinator@wazobia.academy</a>
                            </MainContactBox> 

                            <MainContactBox>  
                                <a class="text-dark" href="tel:09088975611">
                                    <i class="fas fa-phone"></i>0908 897 5611 </a>
                            </MainContactBox>

                            <MainContactBox>  
                                <a class="text-dark" href="tel:09088975611"><i class="fas fa-globe"></i>www.wazobia.academy</a>
                            </MainContactBox>
                       </MainContactDetail>

                        <MainContactMap>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6986452239585!2d3.435520314589946!3d6.432742995345971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf522304ea161%3A0x6e241f8653d2843a!2s267a%20Etim%20Inyang%20Cres%2C%20Victoria%20Island%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1636243718443!5m2!1sen!2sng" width="100%" height="100%"  allowfullscreen="" loading="lazy"></iframe>
                        </MainContactMap>

                    </MainContactDetailsList>
            </ContactPageFormsWrapper>
      
         
        </ContactPageForms>
    )
}

export default ContactPageFormsSection
