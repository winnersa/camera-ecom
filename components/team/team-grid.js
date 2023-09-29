import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Nossr from '../nossr/nossr';
import Image from 'next/image';
import SectionTitleCenter from '../section-title/section-title-center';

const TeamGrid = ({teamdata}) => {
  return (
    <>
      {/* <!-- team-testimonial-area --> */}
          <div className="team-testimonial-area pt-110 pb-65">
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                        <SectionTitleCenter title="Our Support Members" subtitle="Expert Supporters"/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-12">
                        <div className="team-content-wrapper team-grid-content mb-40">
                                <Nossr>
                                    <Swiper
                                    allowTouchMove={true} 
                                    className="testimonial-active"
                                    slidesPerView={4}
                                    modules={[Navigation]} watchSlidesProgress
                                    spaceBetween={30}
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
                                            slidesPerView: 3
                                        },
                                        1200: {
                                            slidesPerView: 4
                                        }
                                    }}
                                    navigation={{
                                    prevEl: '.testimonial-swiper-prev',
                                    nextEl: '.testimonial-swiper-next',
                                    }}>
                                        {
                                            teamdata && teamdata['teams']?.filter(item => item.id < 20).sort((a, b) => a.id - b.id).map((item, id) => (
                                                <SwiperSlide key={id}>
                                                    <div className="team-item">
                                                        <div className="team-img w_img">
                                                            <Link href={`/team/${item.slug}`}><Image width={300} height={305.67} src={`/assets/img/team/${item.image}`} alt="Image" /></Link>
                                                            <div className="team-social-icon">
                                                                {item.facebook && <Link href={item.facebook && item.facebook}><i className="fab fa-facebook-f"></i></Link>}
                                                                {item.twitter && <Link href={item.twitter && item.twitter}><i className="fab fa-twitter"></i></Link>}
                                                                {item.instagram && <Link href={item.instagram && item.instagram}><i className="fab fa-instagram"></i></Link>}
                                                                {item.behance && <Link href={item.behance && item.behance}><i className="fab fa-behance"></i></Link>}
                                                            </div>
                                                        </div>
                                                        <div className="team-content">
                                                            <span className="gear-icon"></span>
                                                            {item.name && <h5 className="team-content-title"><Link href={`/team/${item.slug}`}>{item.name}</Link></h5> }
                                                            {item.designation && <span className="team-content-subtitle">{item.designation}</span>}
                                                            <div className="middle-content">
                                                                <ul className="list">
                                                                    {item.number && <li><i className="fal fa-phone-alt"></i><Link href={`tel:${item.numberLink && item.numberLink}`}>{item.number}</Link></li> }
                                                                    {item.email && <li><i className="fal fa-envelope"></i><Link href={`mailto:${item.emailLink}`}>{item.email}</Link></li>}
                                                                </ul>
                                                            </div>
                                                            <div className="btn-box">
                                                                <Link className="read-more theme-btn" href={`/team/${item.slug}`}>View Profile <i className="fal fa-angle-right"></i></Link>
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

export default TeamGrid