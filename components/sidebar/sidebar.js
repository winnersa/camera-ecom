import Link from 'next/link'
import HeaderNav from '../../data/header-data';
import MenuItem from '../header/mobileMenu/MenuItem';
import { Message_data } from '../../context/context';
import { useContext } from "react";


const MobileSidebar = () => {
    const { sidebar, setSidebarFunc } = useContext(Message_data);
    return (
        <>
            {/* <!-- sidebar-information-area-start --> */}
            <div className={`sidebar-info side-info ${sidebar ? 'info-open': ''}`}>
                <div className="sidebar-logo-wrapper mb-25">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-8">
                            <div className="sidebar-logo">
                                <Link href={'/'}><img src="/assets/img/logo/logo.png" alt="logo-img" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-4">
                            <div className="sidebar-close-wrapper text-end">
                                <button className="sidebar-close side-info-close" onClick={setSidebarFunc}><i className="fal fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-menu-wrapper onsafe-sidebar-menu fix">

                    <ul>
                        {HeaderNav.map((item, index) =>(
                            <MenuItem menuItem={item} key={index} />
                        ))}
                    </ul>
                </div>

                <div className="sidebar-contact-wrapper mt-40">
                    <div className="sidebar-contact mb-40">
                        <h4 className="sidebar-contact-title">Contact Info</h4>
                        <span className="sidebar-address"><i className="fal fa-map-marker-alt"></i><span>4929 Thorn Street Crow heart, WY 82512</span> </span>
                        <Link href="tel:+1(251)410-1010"><i className="fal fa-phone"></i><span>+1 (251) 410-1010</span></Link>
                        <Link href="mailto:example@gmail.com" className="theme-3"><i className="fal fa-envelope"></i><span><span>example@gmail.com</span></span></Link>
                    </div>

                    <div className="sidebar-social mt-40 mb-30">
                        <Link href="#" target="_blank" className="facebook"><i className="fab fa-facebook-f"></i></Link>
                        <Link href="#" target="_blank" className="twitter"><i className="fab fa-twitter"></i></Link>
                        <Link href="#" target="_blank" className="linkedin"><i className="fab fa-linkedin-in"></i></Link>
                        <Link href="#" target="_blank" className="youtube"><i className="fab fa-dribbble"></i></Link>
                    </div>
                </div>
            </div>
            <div className={`offcanvas-overlay ${sidebar ? 'overlay-open': ''}`}  onClick={setSidebarFunc}></div>
            {/* <!-- sidebar-information-area-end --> */}
        </>
    )
}

export default MobileSidebar