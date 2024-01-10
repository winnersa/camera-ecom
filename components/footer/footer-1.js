import Link from 'next/link'

const FooterOne = () => {
  return (
    <>
        {/* <!-- footer area start --> */}
        <footer className="footer-area">
            <div className="footer-top">
                <div className="container">
                    <div className="row align-items-center">
                       <div className="col-xl-4 col-lg-12">
                            <div className="footer-left wow fadeInUp">
                                <div className="inner-left">
                                    <div className="footer-content">
                                        
                                        <div className="footer-logo">
                                            <Link href="index"><img src="/assets/img/logo/logo-2.png" alt="Image Not Found" /></Link>
                                        </div>
                                        <p></p>
                                    </div>
                                    <div className="footer-contact">
                                        {/*Content*/}
                                        <div className="footer-contact-item address">
                                            <div className="address-icon contact-icon">
                                             {/*address*/}
                                                <i className="fal fa-map-signs"></i>
                                            </div>
                                            <div className="address-info contact-info">
                                                <p>CCTV Compare</p>
                                            </div>
                                        </div>
                                        <div className="footer-contact-item phone">
                                            <div className="phone-icon contact-icon">
                                                 {/*phone*/}
                                                <i className="fal fa-phone-alt"></i>
                                            </div>
                                            <div className="phone-info contact-info">
                                                <Link href="tel:+00-123-456-7891">+00859032837</Link>
                                            </div>
                                        </div>
                                        <div className="footer-contact-item mail">
                                            <div className="mail-icon contact-icon">
                                                 {/*Email*/}
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                            <div className="mail-info contact-info">
                                                <Link href="mailto:info@mail.com">karavinamd@gmail.com</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>  
                        <div className="col-xl-5 col-lg-7 col-md-7">
                            <div className="footer-combine mr-30 pt-85 pb-90 ml-60 wow fadeInUp">
                                <div className="footer-menu-wrap">
                                    <div className="footer-widget">
                                        <h3 className="footer-widget-title">Company</h3>
                                        <div className="footer-widget-menu">
                                            <ul>
                                                <li><Link href="/">Home</Link></li>
                                                <li><Link href="/camera">Camera</Link></li>
                                                <li><Link href="/service">Service</Link></li>
                                                <li><Link href="/contact">Contact</Link></li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-time-wrap">
                                    <div className="footer-widget">
                                        <h3 className="footer-widget-title">Working Hours</h3>
                                        <div className="footer-widget-time">
                                            <table className="working-hours">
                                                <tbody>
                                                    <tr>
                                                        <th>Monday</th>
                                                        <td>9am - 5pm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Tuesday</th>
                                                        <td>9am - 5pm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Wendsday</th>
                                                        <td>9am - 5pm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Thursday</th>
                                                        <td>9am - 5pm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Friday</th>
                                                        <td>9am - 5pm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Saturday</th>
                                                        <td>9am - 5pm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Sunday</th>
                                                        <td>9am - 5pm</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-text wow fadeInUp">
                                <p>Copyright © 2023 CCTV UPDATE V.1 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/* <!-- footer area end --> */}
    </>
  )
}

export default FooterOne