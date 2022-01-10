import React from 'react'
import FooterSection from '../../components/Footer'
import Header from '../../components/Header'
import PageHeaderSection from '../../components/PageHeader'
import GallerySection from './components/GallerySection'

function GalleryPage() {
    return (
        <>
            <Header />
            <PageHeaderSection>
                <h2>Gallery</h2>
            </PageHeaderSection>
            <GallerySection />
            <FooterSection />
        </>
    )
}

export default GalleryPage
