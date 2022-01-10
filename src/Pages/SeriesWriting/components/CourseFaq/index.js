import React from 'react'
import { AccordionBody, AccordionBodyContent, AccordionItemHeader, FaqList } from '../../../../components/Faq/FaqElements'
import { CourseFaq, CourseFaqWrapper, CourseFaqContent, CourseFaqHelp } from './CourseFaqElements'

function CourseFaqSection() {
    return (
        <CourseFaq>
            <CourseFaqWrapper>
                <div>
                    <h2>Frequently Asked Questions</h2>
                </div>
                <CourseFaqContent>

                    <FaqList role="list">
                        <li>
    
                            <AccordionItemHeader>
                                <div>
                                    <i class="fas fa-plus"></i>
                                </div>
                                <h3 class="accordion-title">How Long is My Personal Free Trail ?</h3>
                            </AccordionItemHeader>
    
                            <AccordionBody>
                                <AccordionBodyContent>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                                </AccordionBodyContent>
                            </AccordionBody>
                            
                        </li>
    
                        <li>
    
                            <AccordionItemHeader>
                                <div>
                                    <i class="fas fa-plus"></i>
                                </div>
                                <h3 class="accordion-title">How Long is My Personal Free Trail ?</h3>
                            </AccordionItemHeader>
    
                            <AccordionBody>
                                <AccordionBodyContent>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                                </AccordionBodyContent>
                            </AccordionBody>
                            
                        </li>
    
                        <li>
    
                            <AccordionItemHeader>
                                <div>
                                    <i class="fas fa-plus"></i>
                                </div>
                                <h3 class="accordion-title">How Long is My Personal Free Trail ?</h3>
                            </AccordionItemHeader>
    
                            <AccordionBody>
                                <AccordionBodyContent>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                                </AccordionBodyContent>
                            </AccordionBody>
                            
                        </li>

                    </FaqList>
                    <CourseFaqHelp>
                        <p>More questions? <a href="contact.html">Contact Us and ask away</a> </p>
                    </CourseFaqHelp>
                </CourseFaqContent>

            </CourseFaqWrapper>
        </CourseFaq>
    )
}

export default CourseFaqSection
