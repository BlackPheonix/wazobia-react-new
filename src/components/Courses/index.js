import React from 'react'
import { Button, ButtonPrimaryAlt } from '../Button'
import { Course, CourseWrapper, SectionTitle, CoursesList, CoursesBox, CoursesPrice, CoursesBoxDetails, CourseBtn } from './CoursesElements'

function Courses() {
    return (
        <Course>
            <CourseWrapper>
                <SectionTitle>
                    <h2>Our Courses</h2>
                    <p>Our training courses cover the man business of broadcasting and media writing, producting, directings , post production work, distribution and exploitation , animation etc</p>
                </SectionTitle>

                <CoursesList>
                    <CoursesBox>
                        <img src="../images/pro-1.jpg" alt="" />
                        <CoursesBoxDetails>
                            <CoursesPrice>
                                <div>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>&#8358;90,000</p>
                            </CoursesPrice>
                            <h3>Wazobia Pro</h3>
                            <p>Get access to all our courses for a one time fee.</p>
                            <Button>Interested</Button>
                        </CoursesBoxDetails>
                    </CoursesBox>

                    <CoursesBox>
                        <img src="../images/kenny.jpg" alt="" />
                        <CoursesBoxDetails>
                            <CoursesPrice>
                                <div>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>&#8358;30,000</p>
                            </CoursesPrice>
                            <h3>Entrepreneurship In Music</h3>
                            <p>Make Yourself Heard</p>
                            <Button>Interested</Button>
                        </CoursesBoxDetails>
                    </CoursesBox>

                    <CoursesBox>
                        <img src="../images/serieswriting-1.jpg" alt="" />
                        <CoursesBoxDetails>
                            <CoursesPrice>
                                <div>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>&#8358;30,000</p>
                            </CoursesPrice>
                            <h3>Series Writing</h3>
                            <p>Write the best scenario for your future</p>
                            <Button>Interested</Button>
                        </CoursesBoxDetails>
                    </CoursesBox>

                    <CoursesBox>
                        <img src="../images/radiohost-1.jpg" alt="" />
                        <CoursesBoxDetails>
                            <CoursesPrice>
                                <div>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>&#8358;30,000</p>
                            </CoursesPrice>
                            <h3>Writing for Radio</h3>
                            <p>Share off everything you write</p>
                            <Button>Interested</Button>
                        </CoursesBoxDetails>
                    </CoursesBox>

                    <CoursesBox>
                        <img src="../images/fashion-1.jpg" alt="" />
                        <CoursesBoxDetails>
                            <CoursesPrice>
                                <div>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p>&#8358;30,000</p>
                            </CoursesPrice>
                            <h3>Entrepreneurship In The Fashion Industry</h3>
                            <p>Don't Makeup Your CV Anymore</p>
                            <Button>Interested</Button>
                        </CoursesBoxDetails>
                    </CoursesBox>
   
                </CoursesList>

                <CourseBtn>
                    <ButtonPrimaryAlt>All Courses</ButtonPrimaryAlt>
                </CourseBtn>
            </CourseWrapper>
        </Course>
    )
}

export default Courses
