import React from 'react'
import Seo from './seo/seo';
import HeaderOne from '../components/header/header-1';
import FooterOne from '../components/footer/footer-1';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <React.Fragment>
        <HeaderOne/>
        <Seo title={"Error"} />
        <main>
            {/* <!-- 404 area start --> */}
            <div className="error-area bg-default" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="error-content text-center">
                                <h1 className="error-content-title wow fadeInUp">404</h1>
                                <h2 className="error-content-subtitle wow fadeInUp">Oops! Page Not Found</h2>
                                <p className="error-content-text wow fadeInUp">Page does not exist or some other error occured. Go to our Home Page</p>
                                <Link href="/" className="theme-btn error-btn wow fadeInUp">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- 404 area end --> */}
        </main>
        <FooterOne/>
    </React.Fragment>
  )
}

export default ErrorPage