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
                                <div className="social">
                                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                    <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                    <Link href="#"><i className="fab fa-behance"></i></Link>
                                </div>
                                <div className="inner-left">
                                    <div className="footer-content">
                                        <div className="footer-logo">
                                            <Link href="index"><img src="/assets/img/logo/logo-2.png" alt="Image Not Found" /></Link>
                                        </div>
                                        <p></p>
                                    </div>
                                    <div className="footer-contact">
                                        <div className="footer-contact-item address">
                                            <div className="address-icon contact-icon">
                                                <i className="fal fa-map-signs"></i>
                                            </div>
                                            <div className="address-info contact-info">
                                                <p>27, Bangna, TH.</p>
                                            </div>
                                        </div>
                                        <div className="footer-contact-item phone">
                                            <div className="phone-icon contact-icon">
                                                <i className="fal fa-phone-alt"></i>
                                            </div>
                                            <div className="phone-info contact-info">
                                                <Link href="tel:+00-123-456-7891">+66-02-111-111</Link>
                                            </div>
                                        </div>
                                        <div className="footer-contact-item mail">
                                            <div className="mail-icon contact-icon">
                                                <i className="fal fa-envelope"></i>
                                            </div>
                                            <div className="mail-info contact-info">
                                                <Link href="mailto:info@mail.com">info@mail.com</Link>
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
                                                <li><Link href="/about-1">About</Link></li>
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/service">Service</Link></li>
                                                <li><Link href="/contact">Privacy Policy</Link></li>
                                                <li><Link href="/portfolio">Projects </Link></li>
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
                                                        <td>9am - 1pm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Wendsday</th>
                                                        <td>9am - 1pm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Thursday</th>
                                                        <td>9am - 1pm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Friday</th>
                                                        <td>Closed</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Saturday</th>
                                                        <td>9am - 1pm</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Sunday</th>
                                                        <td>9am - 1pm</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-5 col-md-5">
                            <div className="footer-widget pt-85 pb-90 wow fadeInUp">
                                <h3 className="footer-widget-title">Newsletter</h3>
                                <div className="footer-widget-newsletter">
                                    <div className="newsletter-form">
                                        <p>Subscribe to our nesletter, Your mail address is very confidential.</p> 
                                        <form action="#">
                                            <input type="email" name="email" placeholder="Email address" />
                                            <button type="submit" className="theme-btn subscribe-btn">Subscribe Us</button>
                                        </form> 
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