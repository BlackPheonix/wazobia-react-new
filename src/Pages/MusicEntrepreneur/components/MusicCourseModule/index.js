import React from 'react'
import { ButtonPrimaryAlt } from '../../../../components/Button'
import { CourseModule, CourseModuleList, CourseModuleSummarySection, CourseModuleTitleBox, CourseModuleWrapper, CoursePageModules, CoursePageModulesBox } from '../../../SeriesWriting/components/CoursesModuleSection/CourseModuleSectionElements'

function MusicEntrepreneurModule() {
    return (
        <CourseModule>
            <CourseModuleWrapper>
                <CourseModuleSummarySection height="350px">
                <h2>Course Summary</h2>
                    <div class="course-page__summary-list flex fs-300">
                        <a class="text-dark" href="#music-business">The Music Business</a>

                        <ButtonPrimaryAlt>Buy Course<br />&#8358;30,000</ButtonPrimaryAlt>

                    </div>
                </CourseModuleSummarySection>

                <CoursePageModules>
                    <CoursePageModulesBox id="fundamentals">
                        <CourseModuleTitleBox>
                            <div>
                                <i class="fas fa-male"></i>
                                <h2 class="fs-400">The Music Business</h2>
                            </div>
                            <a href="#" class="module-btn text-dark">Buy Module - &#8358;7,500</a>
                        </CourseModuleTitleBox>
                        <CourseModuleList>
                            <p>Module 1: Understanding The Workings Of The Music Industry</p>
                            <p>Module 2: Producing A Musical Project</p>
                            <p>Module 3: Commercial Operations</p>
                            <p>Module 4: The Fundamentals of Marketing In Music</p>
                            <p>Module 5: Digital Promotion</p>
                        </CourseModuleList>
                    </CoursePageModulesBox>

                </CoursePageModules>

            </CourseModuleWrapper>
        </CourseModule>
    )
}

export default MusicEntrepreneurModule
