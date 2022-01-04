import React from 'react'
import { Button, ButtonPrimaryAlt } from '../Button'
import { Contact, ContactWrapper, ContactContent, ContactForm, Form, FormTitle } from './ContactFormElements'

function ContactFormSection() {
    return (
        <Contact>
            <ContactWrapper>
                <ContactContent>
                    <h3 class="uppercase fs-700">Stay Up to Date</h3>
                    
                    <p>We are constantly updating our website with new courses to include professional training in Make-Up, Entrepreneurship in the Fashion Industry, Entrepreneurship in the Cultural and Creative Industries, and lots more.</p>
                </ContactContent>
            
                <ContactForm>
                    <FormTitle>
                        <h2>Join our Mailing List</h2>
                        <p>Send us a message</p>
                    </FormTitle>
                    <Form>

                        <div>  
                            <input type="text" placeholder="Last Name" />
                        </div>

                        <div>       
                            <input type="text" placeholder="First Name" />
                        </div>

                        <div>   
                            <input type="email" placeholder="Email" />
                        </div>

                        <div>
                            <input type="number" placeholder="WhatsApp Number" />
                        </div>

                        <div>
                            <ButtonPrimaryAlt type="submit"> Submit </ButtonPrimaryAlt>
                        </div>
    
                    </Form>
                </ContactForm>
            </ContactWrapper>
        </Contact>
    )
}

export default ContactFormSection
