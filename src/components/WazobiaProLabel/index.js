import React from 'react'
import { WazobiaProLabel, WazobiaProLabelWrapper } from './WazobiaProLabelElements'

function WazobiaProLabelSection() {
    return (
        <WazobiaProLabel>
                <WazobiaProLabelWrapper>
                    <div class="fs-200">
                        <p>This course is included in Wazobia <span class="pro-deco">PRO</span> </p>
      
                    </div>

                    <div class="fs-200">
                        <p>Unlimited access to all Wazobia courses, Guided Projects, Specializations, and Professional Certificates.</p>
                    </div>
                    
                    <div>
                        <a class="fs-200" href="#">Learn More</a>
                    </div>
                </WazobiaProLabelWrapper>
        </WazobiaProLabel>
    )
}

export default WazobiaProLabelSection
