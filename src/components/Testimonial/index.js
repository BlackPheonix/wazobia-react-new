import React from 'react'
import { SectionTitle } from '../Courses/CoursesElements'

import { Testimonial, TestimonialWrapper, TestimonialList, TestimonialBox, TestimonialClient } from './TestimonialElements'

function TestimonialSection() {
    return (
        <Testimonial>
            <TestimonialWrapper>
                <SectionTitle>
                    <h2 class="text-dark">What People say about Us</h2>
                </SectionTitle>

                <TestimonialList>
                    <TestimonialBox>
                        <p>It's a very good platform for young writers to learn. It's straight forward, simple and direct. It's broken down into bits for learners to learn and come up with.</p>
                        <TestimonialClient>
                            <img src="images/male.png" alt="" />
                            <div>
                                <h4>Clinton Emeson Nwojo</h4>
                                <p>Screen Writer</p>
                            </div>
                        </TestimonialClient>
                    </TestimonialBox>

                    <TestimonialBox>
                        <p>This training has helped me appreciate the importance of brainstorming and working with other writers</p>
                        <TestimonialClient>
                            <img src="images/male.png" alt="" />
                            <div>
                                <h4>Abosede Ogundere</h4>
                                <p>Screen Writer</p>
                            </div>
                        </TestimonialClient>
                    </TestimonialBox>

                    <TestimonialBox>
                        <p>We are constantly updating our website with new courses to include professional training in Make-Up, Entrepreneurship in the Fashion Industry, Entrepreneurship in the Cultural and Creative Industries, and lots more.</p>
                        <TestimonialClient>
                            <img src="images/male.png" alt="" />
                            <div>
                                <h4>Amaechi Chidiebere Moses</h4>
                                <p>Screen Writer</p>
                            </div>
                        </TestimonialClient>
                    </TestimonialBox>

                </TestimonialList>
            </TestimonialWrapper>
        </Testimonial>
    )
}

export default TestimonialSection
