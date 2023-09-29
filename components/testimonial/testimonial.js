import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import testimonialData from '../../data/testimonial/testimonial-data';
import Link from 'next/link';
import Nossr from '../nossr/nossr';
import Image from 'next/image';
const TestimonialOne = ({teamlist}) => {
  return (
    <>
        {/* <!-- team-testimonial-area --> */}
            <div className="team-testimonial-area bg-light pt-120 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 order-1 order-lg-0">
                            <div className="testimonial-content pr-50 mb-40 pb-80 wow fadeInUp" >
                                <Nossr>
                                    <Swiper
                                    allowTouchMove={true} 
                                    className="testimonial-active"
                                    slidesPerView={1}
                                    modules={[Navigation]} watchSlidesProgress
                                    navigation={{
                                    prevEl: '.testimonial-swiper-prev',
                                    nextEl: '.testimonial-swiper-next',
                                    }}
                                    >
                                        {
                                            testimonialData && testimonialData.filter(function(e){
                                                return e.id <= 3
                                            }).sort((a, b) => a.id - b.id).map((item, id) => {
                                                return(
                                                    <SwiperSlide key={id}>
                                                        <div className="swiper-slide">
                                                            <div className="testimonial-item">
                                                                <div className="testimonial-person">
                                                                    <Image width={100} height={100} src="/assets/img/testimonial/admin-1.jpg" alt="Image Not Found" />
                                                                </div>
                                                                <div className="testimonial-heading">
                                                                    {item.name && <h5 className="testimonial-title">{item.name}</h5>} 
                                                                    { item.designation && <span className="testimonial-subtitle">{item.designation}</span> } 
                                                                </div>
                                                                {item.content && 
                                                                    <div className="testimonial-text">
                                                                        <p>{item.content}</p>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                )})
                                            }
                                    </Swiper>
                                </Nossr>
                                <div className="testimonial-navigation">
                                    <div className="testimonial-swiper-prev"><i className="fal fa-angle-left"></i></div>
                                    <div className="testimonial-swiper-next"><i className="fal fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7  order-0 order-lg-1">
                            <div className="team-content-wrapper mb-40">
                                <Nossr>
                                    <Swiper
                                    allowTouchMove={true} 
                                    className="testimonial-active"
                                    slidesPerView={2}
                                    modules={[Navigation]} watchSlidesProgress
                                    spaceBetween={30}
                                    navigation={{
                                    prevEl: '.testimonial-swiper-prev',
                                    nextEl: '.testimonial-swiper-next',
                                    }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        576: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 2
                                        }
                                    }}
                                    >
                                        {
                                            teamlist && teamlist['teams']?.filter(item => item.id < 8).sort((a, b) => a.id - b.id).map((item, id) => (
                                                <SwiperSlide key={id}>
                                                    <div className="team-item">
                                                        <div className="team-img w_img">
                                                            <Link href={`/team/${item.slug}`}><Image width={300} height={306} src={`/assets/img/team/${item.image}`} alt="Image" /></Link>
                                                            <div className="team-social-icon">
                                                                {item.facebook && <Link href={item.facebook && item.facebook}><i className="fab fa-facebook-f"></i></Link>}
                                                                {item.twitter && <Link href={item.twitter && item.twitter}><i className="fab fa-twitter"></i></Link>}
                                                                {item.instagram && <Link href={item.instagram && item.instagram}><i className="fab fa-instagram"></i></Link>}
                                                                {item.behance && <Link href={item.behance && item.behance}><i className="fab fa-behance"></i></Link>}
                                                            </div>
                                                        </div>
                                                        <div className="team-content">
                                                            <span className="gear-icon"></span>
                                                            {item.name && <h5 className="team-content-title"><Link href={`/team/${item.slug && item.slug}`}>{item.name}</Link></h5> }
                                                            {item.designation && <span className="team-content-subtitle">{item.designation}</span>}
                                                            <div className="middle-content">
                                                                <ul className="list">
                                                                    {item.number && <li><i className="fal fa-phone-alt"></i><Link href={`tel:${item.numberLink && item.numberLink}`}>{item.number}</Link></li> }
                                                                    {item.email && <li><i className="fal fa-envelope"></i><Link href={`mailto:${item.emailLink}`}>{item.email}</Link></li>}
                                                                </ul>
                                                            </div>
                                                            <div className="btn-box">
                                                                <Link className="read-more theme-btn" href={`/team/${item.slug && item.slug}`}>View Profile <i className="fal fa-angle-right"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                        </Swiper>
                                    </Nossr>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        {/* <!-- team-testimonial-area-end --> */}
    </>
  )
}

export default TestimonialOne