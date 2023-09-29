const SubscribeOne = () => {
  return (
    <>
        {/* <!-- cta area start --> */}
        <div className="cta-area pb-120">
            <div className="container">
                <div className="cta-item bg-default"  style={{ backgroundImage: `url("/assets/img/bg/pattern-1.png")` }}>
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="cta-content mb-30 mb-lg-0 wow fadeInLeft" data-wow-delay="0.5s">
                                <h3 className="cta-content-title">Subscribe Our Newsletter</h3>
                                <p  className="cta-content-text">Stay up to update with our latest news and products.</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="cta-newsletter wow fadeInRight" data-wow-delay="0.5s">
                                <form action="#">
                                    <div className="cta-form-group">
                                        <input type="email" name="email" placeholder="Your Email Address" required="" />
                                        <button type="submit" className="theme-btn cta-btn">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- cta area end --> */}
    </>
  )
}

export default SubscribeOne