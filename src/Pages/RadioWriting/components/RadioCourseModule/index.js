import React from 'react'
import { ButtonPrimaryAlt } from '../../../../components/Button'
import { CourseModule, CourseModuleList, CourseModuleSummarySection, CourseModuleTitleBox, CourseModuleWrapper, CoursePageModules, CoursePageModulesBox } from '../../../SeriesWriting/components/CoursesModuleSection/CourseModuleSectionElements'

function RadioCourseModule() {
    return (
        <CourseModule>
            <CourseModuleWrapper>
                <CourseModuleSummarySection height="365px">
                <h2>Course Summary</h2>
                    <div class="course-page__summary-list flex fs-300">
                        <a class="text-dark" href="#fundamentals">The Fundamentals</a>

                        <a class="text-dark" href="#rules">Rules And Techniques of Radio Animation</a>

                        <a class="text-dark" href="#types">Hosting 4 Types of Radio Programs</a>

                        <a class="text-dark" href="#info">Information On Radio</a>

                        <ButtonPrimaryAlt>Buy Course<br />&#8358;30,000</ButtonPrimaryAlt>

                    </div>
                </CourseModuleSummarySection>

                <CoursePageModules>
                    <CoursePageModulesBox id="fundamentals">
                        <CourseModuleTitleBox>
                            <div>
                                <i class="fas fa-book-open"></i>
                                <h2 class="fs-400">The Fundamentals</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        <CourseModuleList>
                            <p>Module 1: Welcome</p>
                            <p>Module 2: Choosing The right Words</p>
                            <p>Module 3: Use Short Sentences</p>
                            <p>Module 4: The 4 “W”</p>
                            <p>Module 5: The Angle</p>
                            <p>Module 6: Attack And Punchline</p>
                            <p>Module 7: To Wrap Up</p>
                        </CourseModuleList>
                    </CoursePageModulesBox>

                    <CoursePageModulesBox id="rules" >
                        <CourseModuleTitleBox>
                        <div>
                                <i class="fas fa-memory"></i>
                                <h2 class="fs-400">Rules & Techniques of Radio Animation</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        
                        <CourseModuleList>
                            <p>Module 1: The Experts Way</p>
                            <p>Module 2: The Basis; Time</p>
                            <p>Module 3: The Tool, Your Voice</p>
                            <p>Module 4: Before You Start</p>
                            <p>Module 5: Settle In</p>
                            <p>Module 6: Recap</p>
                        </CourseModuleList>
                    </CoursePageModulesBox>

                    <CoursePageModulesBox id="rules" >
                        <CourseModuleTitleBox>
                            <div>
                                <i class="fas fa-scroll"></i>
                                <h2 class="fs-400">The Episode</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        
                        <CourseModuleList>
                            <p>Module 1: Stand-Alone Storyline – Story Arc</p>
                            <p>Module 2: Structure</p>
                            <p>Module 3: Issues</p>
                            <p>Module 4: Main Plot – Secondary Plot</p>
                            <p>Module 5: The Case of The Pilot</p>
                        </CourseModuleList>
                    </CoursePageModulesBox>

                    <CoursePageModulesBox id="rules" >
                        <CourseModuleTitleBox>
                            <div>
                                <i class="fas fa-broadcast-tower"></i>
                                <h2 class="fs-400">Hosting 4 Types of Radio Programs</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        
                        <CourseModuleList>
                            <p>Module 1: Hosting Is Work</p>
                            <p>Module 2: Turn The Music On!</p>
                            <p>Module 3: The Games Are Over</p>
                            <p>Module 4: The Floor Is Yours (Free Airtime)</p>
                            <p>Module 5: Content Programs (Magazines)</p>
                            <p>Module 6: Final Challenge</p>
                            <p>Module 7: Let’s Get To Work!</p>
                        </CourseModuleList>
                    </CoursePageModulesBox>

                    <CoursePageModulesBox id="rules" >
                        <CourseModuleTitleBox>
                            <div>
                                <i class="fas fa-info"></i>
                                <h2 class="fs-400">Information On Radio</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        
                        <CourseModuleList>
                            <p>Module 1: An Info</p>
                            <p>Module 2: Brief And News Flash</p>
                            <p>Module 3: The News Journal</p>
                            <p>Module 4: Facilitating A Radio Debate</p>
                            <p>Module 5: Radio Reporting</p>
                            <p>Module 6: The Sports Commentary</p>
                            <p>Module 7: Final Challenge</p>
                        </CourseModuleList>
                    </CoursePageModulesBox>

                </CoursePageModules>

            </CourseModuleWrapper>
        </CourseModule>
    )
}

export default RadioCourseModule
