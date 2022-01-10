import React from 'react'
import { ButtonPrimaryAlt } from '../../../../components/Button'
import { CourseModule, CourseModuleList, CourseModuleSummarySection, CourseModuleTitleBox, CourseModuleWrapper, CoursePageModules, CoursePageModulesBox } from '../../../SeriesWriting/components/CoursesModuleSection/CourseModuleSectionElements'

function FashionEntrepreneurModule() {
    return (
        <CourseModule>
            <CourseModuleWrapper>
                <CourseModuleSummarySection height="450px">
                <h2>Course Summary</h2>
                    <div class="course-page__summary-list flex fs-300">
                        <a class="text-dark" href="#explore">Explore The Fashion And Luxury Sector And Invest</a>

                        <a class="text-dark" href="#business">Launching A Fashion Business</a>

                        <a class="text-dark" href="#rules">Choosing A sector And Following The Rules</a>

                        <a class="text-dark" href="#strategy">Developing A Strategic Approach: Target And Positioning</a>

                        <a class="text-dark" href="#marketing">Developing A Marketing Action Plan</a>

                        <ButtonPrimaryAlt>Buy Course<br />&#8358;30,000</ButtonPrimaryAlt>

                    </div>
                </CourseModuleSummarySection>

                <CoursePageModules>
                    <CoursePageModulesBox id="fundamentals">
                        <CourseModuleTitleBox>
                            <div>
                                <i class="fas fa-male"></i>
                                <h2 class="fs-400">Explore The Fashion And Luxury Sector And Invest</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        <CourseModuleList>
                            <p>Module 1: Understanding Fashion And Luxury</p>
                            <p>Module 2: Fashion Products And Luxury Products</p>
                            <p>Module 3: The Business of Fashion</p>
                            <p>Module 4: The Key Success Factors</p>
                        </CourseModuleList>
                    </CoursePageModulesBox>

                    <CoursePageModulesBox id="rules" >
                        <CourseModuleTitleBox>
                            <div>
                                <i class="fas fa-book"></i>
                                <h2 class="fs-400">Launching A Fashion Business</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        
                        <CourseModuleList>
                            <p>Module 1: Business Plan</p>
                            <p>Module 2: Setting Business And Financial Goals</p>
                            <p>Module 3: Legal, Human Resources And Management</p>
                            <p>Module 4: The Key Success Factors</p>
                        </CourseModuleList>
                    </CoursePageModulesBox>

                    <CoursePageModulesBox id="rules" >
                        <CourseModuleTitleBox>
                            <div>
                                <i class="fas fa-scroll"></i>
                                <h2 class="fs-400">Choosing A sector And Following The Rules</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        
                        <CourseModuleList>
                            <p>Module 1: Getting Started</p>
                            <p>Module 2: Planning To Diversify Later</p>
                            <p>Module 3: Designing A Collection</p>
                            <p>Module 4: Controlling Sourcing And Production</p>
                            <p>Module 5: Controlling The Supply Chain</p>
                        </CourseModuleList>
                    </CoursePageModulesBox>

                    <CoursePageModulesBox id="rules" >
                        <CourseModuleTitleBox>
                            <div>
                                <i class="fas fa-sticky-note"></i>
                                <h2 class="fs-400">Developing A Strategic Approach: Target And Positioning</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        
                        <CourseModuleList>
                            <p>Module 1: Segment A Market To Better Approach It</p>
                            <p>Module 2: Summarizing Your Core Target</p>
                            <p>Module 3: Defining Your Style And Uniqueness</p>
                            <p>Module 4: Justify Your Relevance</p>
                        </CourseModuleList>
                    </CoursePageModulesBox>

                    <CoursePageModulesBox id="rules" >
                        <CourseModuleTitleBox>
                            <div>
                                <i class="fas fa-tools"></i>
                                <h2 class="fs-400">Developing A Marketing Action Plan</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        
                        <CourseModuleList>
                            <p>Module 1: Managing A Brand With Effective Specifications</p>
                            <p>Module 2: Designing Products That Create Value</p>
                            <p>Module 3: Building A Relevant Approach To Product Dissemination And Communication</p>
                        </CourseModuleList>
                    </CoursePageModulesBox>

                </CoursePageModules>

            </CourseModuleWrapper>
        </CourseModule>
    )
}

export default FashionEntrepreneurModule
