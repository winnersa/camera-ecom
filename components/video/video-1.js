import Link from 'next/link'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import ModalVideo from 'react-modal-video'
import Nossr from '../nossr/nossr';
import Image from 'next/image';

const VideoOne = ({servicelist}) => {
    const [isOpen, setOpen] = useState(false)
  return (
    <>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ik3Xkhx0q7Q" onClose={() => setOpen(false)} />
        {/* <!-- video area start --> */}
            <div className="video-area pb-120">
                <div className="video-img bg-default" style={{ backgroundImage:`url("/assets/img/video/video-bg.jpg")` }}>
                    <div className="video-icon">
                        <Link href="#0" onClick={()=> setOpen(true)} className="play-btn popup-video"><i className="fas fa-play"></i></Link>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10">
                            <div className="video-wrap pt-120 pt-md-0">
                            <Nossr>
                                <Swiper>
                                    {servicelist && servicelist['services']?.filter(item => item.id > 10 && item.id < 14).sort((a, b) => a.id - b.id).map((item, id) => (
                                    <SwiperSlide key={item.id}>
                                            <div className="video-item">
                                                <div className="row align-items-center">
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-5">
                                                        <div className="video-inner-img mb-30 mb-sm-0 wow fadeInUp" data-wow-delay="0.3s">
                                                            {item.img && <Image width={520} height={390} src={item.img} alt="Image Not Found" /> }
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-7">
                                                        <div className="video-content wow fadeInUp" data-wow-delay="0.5s">
                                                            {item.title && <h3 className="video-content-title">{item.title}</h3>}
                                                            {item.excerpt && <p>{item.excerpt}</p> }
                                                            <Link className="about_content-link" href={`/service/${item.slug && item.slug}`}>
                                                                <span>Read More</span>
                                                                <i className="fal fa-long-arrow-right"></i>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide> 
                                    ))}
                                </Swiper>
                            </Nossr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- video area end --> */}
    </>
  )
}

export default VideoOne