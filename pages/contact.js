import React from 'react'
import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1'
import Seo from './seo/seo'
import HeaderOne from '../components/header/header-1'
import FooterOne from '../components/footer/footer-1'
import ContactOne from '../components/contact/contact'

const Contact = () => {
  return (
    <React.Fragment>
        <HeaderOne/>
        <Seo title={"Camera need"} />
        <BreadCrumbOne title={"Camera need"}/>
        <main>
            <ContactOne/>
        </main>
        <FooterOne/>
    </React.Fragment>
  )
}

export default Contact