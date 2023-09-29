import React from 'react'
import HeaderNav from '../../data/header-data'
import Link from 'next/link'

const NagigationOne = () => {
  return (
    <React.Fragment>
        <div className="header-menu d-none d-lg-block">
            <div className="container">
                <div className="menu-wrap">
                    <nav className="main-menu mobile-menu" id="mobile-menu">
                        <ul>
                            {
                             HeaderNav && HeaderNav.map((item, id) => {
                                return(
                                <li key={id} className={item.hasChild ? 'menu-has-child': ''} >
                                    <Link href={`${item.slug}`}>{item.title}</Link>
                                    {
                                        item.childItems && (
                                        <ul className="submenu">
                                            {
                                                item.childItems.map((item, id) => (
                                                    <li key={id}><Link href={item.slug}>{item.title}</Link></li>
                                                ))
                                            }
                                        </ul>
                                        )
                                    }
                                </li>
                                )
                             })  
                            }
                            
                        </ul>
                    </nav>
                    <div className="menu-right">
                        <Link href="/cart" className="theme-btn header-btn "><i className="fal fa-shopping-cart"></i></Link>
                        {/*<Link href="/cart" className="theme-btn header-btn">Get in cart</Link>*/}
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
export default NagigationOne