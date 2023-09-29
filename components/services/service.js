import Link from 'next/link';

const Service = ({countStart, countEnd, bgLight=true, servicedata}) => {
  return (
    <>
      {/* <!-- service area start --> */}
      <section>
          <div className={`service-area pt-110 pb-120 ${bgLight ? 'bg-light' : ''}`}>
              <div className="container">
                  <div className="row g-0">
                      <div className="col-xl-4 col-lg-6 col-md-6">
                          <div className="service-section wow fadeInUp" data-wow-delay="0.3s">
                              <div className="section-area">
                                  <span className="section-subtitle mb-10">Compare</span>
                                  <h2 className="section-title f-46 mb-0">Product performance</h2>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>
      {/* <!-- service area end --> */}
    </>
  )
}

export default Service