import React from 'react'
import { ButtonAccent } from '../../../../components/Button'
import { Affordable, AffordableWrapper, AffordableBox } from './AffordableElements'

function AffordableSection() {
    return (
        <Affordable>
            <AffordableWrapper>
                <AffordableBox>
                    <h2>Enjoy <span>Affordable Training</span>  For Creative Professionals</h2>
                </AffordableBox>
                <AffordableBox>
                    <ButtonAccent>Contact Us</ButtonAccent>
                </AffordableBox>
            </AffordableWrapper>
        </Affordable>
    )
}

export default AffordableSection
