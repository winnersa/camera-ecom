import Link from 'next/link'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';
import Nossr from '../nossr/nossr';

const PortfolioOne = ({portfoliolist}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
        {/* <!-- portfolio area start --> */}
            <section>
                <div className="portfolio-area ">
                    <div className="portfolio-wrap">
                        <div className="portfolio-controller">
                        {
                            portfoliolist && 
                            <Nossr>
                                <Swiper 
                                allowTouchMove={true} 
                                className="portfolio-thumbs"
                                slidesPerView={5}
                                modules={[Thumbs]} watchSlidesProgress onSwiper={setThumbsSwiper}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 2,
                                        },
                                    576: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 5
                                    }
                                }}
                                >
                                    {
                                        portfoliolist && portfoliolist['portfolios']?.filter(item => item.id <= 5 ).sort((a, b) => a.id - b.id).map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="controller-item">
                                                    <div className="controller-icon">
                                                        {item.icon && <i className={item.icon}></i> }
                                                    </div>
                                                    {
                                                        item.title && 
                                                        <div className="controller-info">
                                                            <h4 dangerouslySetInnerHTML={{ __html: item.htmlTitle }} ></h4>
                                                        </div>
                                                    }
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                        
                                        <div className="portfolio-navigation">
                                            <div className="portfolio-swiper-prev"><i className="fal fa-angle-left"></i></div>
                                            <div className="portfolio-swiper-next"><i className="fal fa-angle-right"></i></div>
                                        </div>
                                </Swiper>
                            </Nossr>
                        }
                        </div>
                        {
                            portfoliolist && 
                            <div className="swiper-container portfolio-active">
                                <Nossr>
                                    <Swiper modules={[Thumbs, Navigation]}
                                        allowTouchMove={true} 
                                        slidesPerView={1}
                                        navigation={{
                                            prevEl: '.portfolio-swiper-prev',
                                            nextEl: '.portfolio-swiper-next',
                                        }}
                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null  }}>
                                        {
                                        portfoliolist && portfoliolist['portfolios']?.filter(item => item.id <= 5 ).sort((a, b) => a.id - b.id).map((item) => (
                                            <SwiperSlide key={item.id}>
                                                <div className="portfolio-item bg-default" style={{ backgroundImage: `url(assets/img/portfolio/${item.img && item.img})` }} >
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-8">
                                                                <div className="portfolio-content">
                                                                    {item.title && <h2 className="portfolio-content-title wow fadeInUp">{item.title}</h2>}
                                                                    {item.excerpt && <p className=" wow fadeInUp">{item.excerpt}</p>}
                                                                    <div className="theme-buttons wow fadeInUp">
                                                                        {item.slug && 
                                                                            <Link className="theme-button" href={`/portfolio/${item.slug && item.slug}`}>
                                                                                <span>Read More</span><i className="fal fa-long-arrow-right"></i>
                                                                            </Link>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Nossr>
                            </div>
                        }
                    </div>
                </div>
            </section>
        {/* <!-- portfolio area end --> */}
    </>
  )
}

export default PortfolioOne