import React from 'react'
import { ButtonPrimaryAlt } from '../../../../components/Button'
import { CourseModule, CourseModuleWrapper, CourseModuleSummarySection, CoursePageModulesBox, CourseModuleTitleBox, CourseModuleList, CoursePageModules } from './CourseModuleSectionElements'

function CourseModuleSection() {
    return (
        <CourseModule>
            <CourseModuleWrapper>

                <CourseModuleSummarySection>
                    <h2>Course Summary</h2>
                    <div class="course-page__summary-list flex fs-300">
                        <a class="text-dark" href="#fundamentals">Characters</a>

                        <a class="text-dark" href="#rules">Bible</a>

                        <a class="text-dark" href="#types">The Episode</a>

                        <a class="text-dark" href="#info">The Scene</a>

                        <a class="text-dark" href="#info">Resources: Tools For Scriptwriters’ Use</a>

                        <ButtonPrimaryAlt>Buy Course<br />&#8358;30,000</ButtonPrimaryAlt>

                    </div>
                </CourseModuleSummarySection>
                <CoursePageModules>

                    <CoursePageModulesBox id="fundamentals">
                        <CourseModuleTitleBox>
                            <div class="course-page__modules-title flex">
                                <i class="fas fa-male"></i>
                                <h2 class="fs-400">Characters</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        <CourseModuleList>
                            <p>Module 1: A Character; A Conflict, A Story</p>
                            <p>Module 2: Characterization</p>
                            <p>Module 3: The Network of Characters</p>
                            <p>Module 4: Comedy Character</p>
                    
                        </CourseModuleList>
                    </CoursePageModulesBox>

                    <CoursePageModulesBox id="rules" >
                        <CourseModuleTitleBox>
                            <div class="course-page__modules-title flex">
                                <i class="fas fa-book"></i>
                                <h2 class="fs-400">Bible</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        
                        <CourseModuleList>
                            <p>Module 1: Concept</p>
                            <p>Module 2: Arena</p>
                            <p>Module 3: Characters</p>
                            <p>Module 4: Narrative Arches</p>
                          
                        </CourseModuleList>
                    </CoursePageModulesBox>

                    <CoursePageModulesBox id="types">
                        <CourseModuleTitleBox>
                            <div class="course-page__modules-title flex">
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

                    <CoursePageModulesBox id="info">
                        <CourseModuleTitleBox>
                            <div class="course-page__modules-title flex">
                                <i class="fas fa-sticky-note"></i>
                                <h2 class="fs-400">The Scene</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        
                        <CourseModuleList>
                            <p>Module 1: The Conflict</p>
                            <p>Module 2: Time, Place, Action</p>
                            <p>Module 3: Dialogues And Subtext</p>
                            <p>Module 4: To Surprise, To Be Original</p>
                            <p>Module 5: Blocking On A Scene; What Solution?</p>
                           
                        </CourseModuleList>
                    </CoursePageModulesBox>

                    <CoursePageModulesBox id="info">
                        <CourseModuleTitleBox>
                            <div class="course-page__modules-title flex">
                                <i class="fas fa-tools"></i>
                                <h2 class="fs-400">Resources: Tools For Scriptwriters’ Use</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        
                        <CourseModuleList>
                            <p>Module 1: Temporality And Ellipses</p>
                            <p>Module 2: Dramatic Irony/Tragic Irony</p>
                            <p>Module 3: Off Screen And Suggestion</p>
                            <p>Module 4: This Is The End: How To Conclude A Series</p>
                           
                        </CourseModuleList>
                    </CoursePageModulesBox>

                </CoursePageModules>
            </CourseModuleWrapper>
        </CourseModule>
    )
}

export default CourseModuleSection
