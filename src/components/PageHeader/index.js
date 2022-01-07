import React from 'react'
import { PageHeader, PageHeaderWrapper } from './PageHeaderElements'

function PageHeaderSection(props) {
    const { children } = props;
    return (
        <PageHeader>
            <PageHeaderWrapper>
                { children }
            </PageHeaderWrapper>
        </PageHeader>
        
    )
}

export default PageHeaderSection
