import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from 'react-query';
import SectionTitleLeft from '../section-title/section-title-left';

const About = (props) => {
    const { data } = useQuery({
        queryKey: ['service'],
        queryFn: getServices,
        initialData: props.services,
    })
  return (
    <div>
            {/* about area start */}
            <section>
                <div className="about-area pt-120 pb-80 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <SectionTitleLeft title={"We work with the most <br /> successful companies."} subtitle="About Our Company" />
                            </div>
                        </div>
                        <div className="row align-items-center g-0">
                            <div className="col-xl-6 col-lg-6">
                                <div className="about-img w_img mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                    <Image width={645} height={650} src={'/assets/img/about/_assets_img_about_1.jpg'} alt="image" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="about-wrap mb-30">
                                    <div className="about_posts">
                                        {
                                            data && data['services'].filter(function(e){
                                                return e.id < 3
                                            }).map((item, key) => {
                                                return(
                                                    <div key={key} className="about_posts-item mb-30">
                                                        <div className="about-media w_img wow fadeInLeft" data-wow-delay="0.5s">
                                                            {item.img && <Link href={item.slug && `/service/${item.slug && item.slug}`}>
                                                                <Image width={363} height={253} src={`/assets/img/about/${item.img}`} alt="Image Not Found" />
                                                            </Link>}
                                                        </div>
                                                        <div className="about-content wow fadeInRight" data-wow-delay="0.5s">
                                                            { item.title && <h4 className="about_content-title"><Link href={`/service/${item.slug && item.slug}`}>
                                                                {item.title} 
                                                            </Link></h4> }
                                                            {
                                                            item.excerpt && 
                                                                <p className="about_content-text">
                                                                    {item.excerpt}
                                                                </p>
                                                            }
                                                            {
                                                            item.slug && 
                                                                <Link className="about_content-link" href={`/service/${item.slug && item.slug}`}>
                                                                    <span>Read More</span>
                                                                    <i className="fal fa-long-arrow-right"></i>
                                                                </Link>
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/* <!-- about area end --> */}
    </div>
  )
}
const getServices = async () => {
    const servicdata = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/servicelist`);
    return await servicdata.json()
  }
export const getServerSideProps = async (context) => {
    return {
      props: {
        services: await getServices()
      }
    }
  }


export default About