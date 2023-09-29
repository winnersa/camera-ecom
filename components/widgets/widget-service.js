import Link from 'next/link'

const WidgetService = ({countStart, countEnd, servicelist}) => {
  return (
    <>
        <div className="service-sidebar pb-50">
            <div className="widget-categories mb-40 wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="widget-title">Services</h5>
                <div className="widget-content">
                    {
                        servicelist &&
                        <ul>
                            {
                                servicelist && servicelist['services']?.filter(item => item.id > countStart && item.id < countEnd).sort((a, b) => a.id - b.id).map((item, id) => (
                                    <li key={id}><Link href={`/service/${item.slug && item.slug}`}>{item.title && item.title}<i className="fal fa-arrow-right"></i></Link></li>
                                ))
                            }
                        </ul>
                    }
                    
                </div>
            </div>
            <div className="widget-help mb-40 wow fadeInUp" data-wow-delay="0.3s">
                <div className="widget-content">
                    <h4 className="widget-title">Tailored Solutions For Your Security Priorities</h4>
                    <p className="widget-text">We will design, install, and upgrade solutions to meet
                        business specific needs and budgets from large.
                    </p>
                    <Link href="tel:+201061245741" className="phone-number">
                        <i className="fal fa-phone-alt"></i>002 01061245741
                    </Link>
                    <Link href="/contact" className="theme-btn service-widget-btn">
                        Get Started Now
                        <i className="fal fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
            <div className="widget-download wow fadeInUp" data-wow-delay="0.5s">
                <div className="widget-content">
                    <h4 className="widget-title">Download Brochure</h4>
                    <Link target={'_blank'} href="https://oui.doleta.gov/dmstree/handbooks/407/appendices_r1200/r1200appendix_d.pdf" className="download-btn download-btn-1">
                        <i className="fal fa-folder-download"></i>Company Report 2022
                    </Link>
                    <Link target={'_blank'} href="https://oui.doleta.gov/dmstree/handbooks/407/appendices_r1200/r1200appendix_d.pdf" className="download-btn download-btn-2">
                        <i className="fal fa-folder-download"></i>Company Brochure
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default WidgetService