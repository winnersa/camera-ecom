import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <div>
        <div className="header-topbar d-none d-md-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8">
                        <div className="header-topbar-info">
                            <p><i className="fal fa-map-marker-alt"></i>300 Bangna 21 NW, Bangkok, NA 20006, TH</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4">
                        <div className="header-topbar-social">
                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                            <Link href="#"><i className="fab fa-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar