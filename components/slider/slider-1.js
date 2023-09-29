import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import {sliderOneData, sliderOneImage} from '../../data/slider/slider-1';
import Link from 'next/link';
import Nossr from '../nossr/nossr';

const SliderOne = () => {
  // store swiper instances
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <React.Fragment>
      {/* <!-- banner area start --> */}
      <section>
        <div className="banner-area">
            <div className="banner-wrap">
                <div className="banner-banner-control">
                <Nossr>
                  <Swiper 
                    allowTouchMove={false} 
                    modules={[Thumbs]} watchSlidesProgress onSwiper={setThumbsSwiper}>
                      {
                        sliderOneData && sliderOneData.map((item, index) => {
                          return(
                            <SwiperSlide key={index}>
                                <div className="banner-main">
                                    <div className="banner-control-item">
                                        <div className="banner-content">
                                            <span className="banner-subtitle wow fadeInUp" data-wow-delay="0.1s">{item.subtitle && item.subtitle}</span>
                                            <h2 className="banner-title wow fadeInUp" data-wow-delay="0.3s">{item.title && item.title}</h2>
                                            <div className="banner-button mt-35 wow fadeInUp" data-wow-delay="0.5s">
                                                <Link className="about_content-link banner-btn" href={`/${item.slug && item.slug}`}>
                                                    <span>Read More</span><i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            // slider end
                          )
                        })
                      }
                    </Swiper>
                  </Nossr>
                </div>
                <div className="banner-img-wrap">
                <Nossr>
                  <Swiper modules={[Thumbs, Navigation]}
                  allowTouchMove={false} 
                  navigation={{
                    prevEl: '.banner-swiper-prev',
                    nextEl: '.banner-swiper-next',
                  }}
                  
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null  }}>
                    {
                      sliderOneImage && sliderOneImage.map((item, index) => {
                        return(
                          <SwiperSlide key={index}>
                            <div className="single-banner wow fadeInUp" data-wow-delay="0.3s">
                                <div className="banner-image bg-default has-bg-image" style={{ backgroundImage:`url(assets/img/bg/${item.url && item.url})` }}>
                                </div>
                            </div>
                          </SwiperSlide>
                        )
                      })
                    }
                    </Swiper>
                  </Nossr>
                </div>
                <div className="banner-navigation">
                    <div className="banner-swiper-prev"><i className="fal fa-angle-left"></i>
                    </div>
                    <div className="banner-swiper-next"><i className="fal fa-angle-right"></i>
                    </div>
                </div>
            </div>
            <div className="banner-area-social-wrapp d-none d-lg-inline-block">
                <button><i className="fal fa-search"></i></button>
                <Link href="#">Facebook</Link>
                <Link href="#">Twitter</Link>
                <Link href="#">Linkedin</Link>
            </div>
        </div>
    </section>
        {/* <!-- banner area end --> */}
    </React.Fragment>
  )
}

export default SliderOne

