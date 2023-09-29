import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import BreadCrumbOne from '../../components/breadcrumb/breadcrumb-1';
import Seo from '../seo/seo';
import HeaderOne from '../../components/header/header-1';
import FooterOne from '../../components/footer/footer-1';
const Slug = ({team}) => {
  return (
    <React.Fragment>
      <HeaderOne/>
      <Seo title={team.name && team.name} />
      <BreadCrumbOne title={team.name && team.name}/>
      <main>
        {/* <!-- team details area start --> */}
            <section>
                <div class="team-details-area pt-120 pb-70">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-5 col-lg-5">
                                <div class="team-details-img w_img pb-50 wow fadeInLeft" data-wow-delay="0.3s">
                                    {team.image && <Image width={520} height={529.84} src={`/assets/img/team/${team.image}`} alt="Image Not Found" />}
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7">
                                <div class="team-details-content ml-40 pb-50">
                                    <div class="team-details-info">
                                        {team.designation && <span class="team-details-subtitle wow fadeInUp" data-wow-delay="0.1s">{team.designation}</span>}
                                        {team.name && <h3 class="team-details-title wow fadeInUp" data-wow-delay="0.3s">{team.name}</h3>}
                                        {team.excerpt && <p class=" wow fadeInUp" data-wow-delay="0.5s">
                                            {team.excerpt}
                                        </p>}
                                    </div>
                                    <div class="team-details-contact">
                                    {team.number && <div class="single-contact mb-20 wow fadeInUp" data-wow-delay="0.4s">
                                            <div class="contact-info-icon">
                                                <i class="fal fa-phone-alt"></i>
                                            </div>
                                            <div class="contact-info-details">
                                                <span>Phone Number</span>
                                                <Link href={`tel:${team.numberLink && team.numberLink}`}>{team.number}</Link>
                                            </div>
                                        </div>}
                                        {team.email && <div class="single-contact mb-20 wow fadeInUp" data-wow-delay="0.5s">
                                            <div class="contact-info-icon">
                                                <i class="fal fa-envelope-open-text"></i>
                                            </div>
                                            <div class="contact-info-details">
                                                <span>Email Address</span>
                                                <Link href={`mailto:${team.emailLink && team.emailLink}`}>{team.email}</Link>
                                            </div>
                                        </div>}
                                        {team.location && <div class="single-contact mb-20 wow fadeInUp" data-wow-delay="0.6s">
                                            <div class="contact-info-icon">
                                                <i class="fal fa-map-marker-alt"></i>
                                            </div>
                                            <div class="contact-info-details">
                                                <span>Office Location</span>
                                                <p>{team.location}</p>
                                            </div>
                                        </div>}
                                        <div class="team-details-social wow fadeInUp" data-wow-delay="0.7s">
                                            <h4 class="team-details-social-title">Social:</h4>
                                            <div class="inner-social">
                                                {team.facebook && <Link target={"_blank"} href={team.facebook}><i class="fab fa-facebook-f"></i></Link>}
                                                {team.twitter && <Link target={"_blank"} href={team.twitter}><i class="fab fa-twitter"></i></Link>}
                                                {team.instagram && <Link target={"_blank"} href={team.instagram}><i class="fab fa-instagram"></i></Link>}
                                                {team.behance && <Link target={"_blank"} href={team.behance}><i class="fab fa-behance"></i></Link>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-6 col-lg-6">
                                <div class="team-details-skill pb-15 mr-20 wow fadeInUp" data-wow-delay="0.4s">
                                    <h3 class="team-details-title">Professional Skills</h3>
                                    <div class="progress-item mb-25 ">
                                        <div class="progress-heading mb-10">
                                            <p class="progress-heading-title">CCTV installation</p>
                                            <span>85%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar w-85 wow slideInLeft" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" data-wow-delay=".1s"></div>
                                        </div>
                                    </div>
                                    <div class="progress-item mb-25 ">
                                        <div class="progress-heading mb-10">
                                            <p class="progress-heading-title">Experience & Research</p>
                                            <span>90%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar w-90 wow slideInLeft" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" data-wow-delay=".4s"></div>
                                        </div>
                                    </div>
                                    <div class="progress-item mb-25">
                                        <div class="progress-heading mb-10">
                                            <p class="progress-heading-title">Electronic  Security</p>
                                            <span>56%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar w-60 wow slideInLeft" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" data-wow-duration="2s" data-wow-delay=".6s"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6">
                                <div class="team-details-experience pb-50 ml-20 wow fadeInUp" data-wow-delay="0.6s">
                                    <h3 class="team-details-title">Experiences</h3>
                                    <div class="team-details-experience-content">
                                        <p class="team-details-experience-text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam atque ab dolores quia. Necessitatibus unde fuga dignissimos laboriosam ducimus officiis dolores voluptates eos. Omnis quidem, a molestiae unde consectetur aut.
                                        </p>
                                        <div class="team-details-experience-box">
                                            <h4 class="team-details-box-title">ARPK Security guard head</h4>
                                            <span class="team-details-box-subtitle">Jan 2022 to Jun 2022</span>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- team details area end --> */}
      </main>
      <FooterOne/>
    </React.Fragment>
  )
}
export async function getServerSideProps(context) {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
  const {slug} = context.query
  const team = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getteam?slug=${slug}`);
  const singleteam = await team.json();
  return {
    props: {
      team: singleteam
    }, // will be passed to the page component as props
  }
}
export default Slug