import React from 'react'
import { Button, ButtonPrimaryAlt } from '../../../../components/Button'
import { WazobiaProSectionStyled, WazobiaProSectionStyledWrapper, WazobiaProFeaturesBox, WazobiaProFeatureList, WazobiaProSectionHeader } from './WazobiaProSectionElements'

function WazobiaProSection() {
    return (
        <WazobiaProSectionStyled>
            <WazobiaProSectionStyledWrapper>
                <WazobiaProSectionHeader>
                    <h2>Wazobia Pro</h2>
                    <p>Get this course, plus unlimited access to all Wazobia Academy courses, Guided Projects, Specializations, and Professional Certificates</p>
                </WazobiaProSectionHeader>

                <WazobiaProFeatureList>
                    <WazobiaProFeaturesBox>
                        <img src="./images/compass.png" alt="" />
                        <h3>Learn anything</h3>
                        <p>Explore any interest or trending topic, take prerequisites, and advance your skills</p>
                    </WazobiaProFeaturesBox>

                    <WazobiaProFeaturesBox>
                        <img src="./images/money.png" alt="" />
                        <h3>Save money</h3>
                        <p>Spend less money on your learning if you plan to take multiple courses this year</p>
                    </WazobiaProFeaturesBox>

                    <WazobiaProFeaturesBox>
                        <img src="./images/head.png" alt="" />
                        <h3>Flexible learning</h3>
                        <p>Learn at your own pace, move between multiple courses, or switch to a different course</p>
                    </WazobiaProFeaturesBox>

                    <WazobiaProFeaturesBox>
                        <img src="./images/certificate-small.png" alt="" />
                        <h3>Unlimited certificates</h3>
                        <p>Earn a certificate for every learning program that you complete at no additional cost</p>
                    </WazobiaProFeaturesBox>
                </WazobiaProFeatureList>
                <div>
                    <ButtonPrimaryAlt>Explore Wazobia Pro</ButtonPrimaryAlt>
                </div>
            </WazobiaProSectionStyledWrapper>
        </WazobiaProSectionStyled>
    )
}

export default WazobiaProSection
