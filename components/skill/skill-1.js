import Image from 'next/image'
import React from 'react'
import { countOne } from '../../data/count/count-1'
import SectionTitleLeft from '../section-title/section-title-left'
import ServiceTwo from '../services/service-2'

const SkillOne = () => {
  return (
    <React.Fragment>
        {/* <!-- product area start --> */}
            <section>
                <div className="product-area pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 ">
                                <div className="product-img w_img pb-40 pb-lg-0 pr-40 wow fadeInUp" data-wow-delay="0.3s">
                                    <Image width={590} height={587} src="/assets/img/product/1.png" alt="Image Not Found" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <SectionTitleLeft title={"Our Latest Product That You Needed."} subtitle={"Latest Product"} excerpt={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.."} />
                                <div className="product-circle mb-70">
                                    {
                                        countOne && countOne.filter(function(e){
                                            return e.id <= 3
                                        }).sort((a, b) => a.id - b.id).map((item) => {
                                            return(
                                                <div key={item.id} className="product-circle-item wow fadeInUp">
                                                    <svg className="radial-progress web-design" viewBox="0 0 80 80">
                                                        <circle className="incomplete" cx="40" cy="40" r="35"></circle>
                                                        <circle className="complete" cx="40" cy="40" r="35" style={{"strokeDashoffset": "39.58406743523136"}}></circle>
                                                        <text className="percentage" x="50%" y={`57%`} transform="matrix(0, 1, -1, 0, 80, 0)">{item.number && item.number}%</text>
                                                    </svg>
                                                    {item.label && <h4 className="product-item-title">{item.label}</h4> }
                                                </div>
                                            )
                                        })
                                    }
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    <ServiceTwo/>
                </div>
            </section>
        {/* <!-- product area end --> */}
    </React.Fragment>
  )
}

export default SkillOne