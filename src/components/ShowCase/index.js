import React from 'react'
import { Button } from '../Button'
import { Showcase, ShowCaseWrapper } from './ShowCaseElements'

function ShowCase() {
    return (
        <Showcase>
                <ShowCaseWrapper>
                    <h1>Wazobia Academy</h1>
                    <p>LEARN AND LEAD</p>
                    <Button>
                        Explore
                    </Button>
                </ShowCaseWrapper>          
        </Showcase>
    )
}

export default ShowCase
