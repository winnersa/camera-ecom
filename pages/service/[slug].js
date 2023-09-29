import React from 'react'
import BreadCrumbOne from '../../components/breadcrumb/breadcrumb-1'
import Seo from '../seo/seo'
import HeaderOne from '../../components/header/header-1'
import FooterOne from '../../components/footer/footer-1';
import WidgetService from '../../components/widgets/widget-service';
import { useQuery } from 'react-query';

const Slug = ({service, allservices}) => {
  const {data:servicelist} = useQuery(
    {
      queryKey:['services'],
      queryFn: getService,
      initialData: allservices 
    }
  )
  return (
    <React.Fragment>
      <HeaderOne/>
      <Seo title={service.title && service.title} />
      <BreadCrumbOne title={service.title && service.title}/>
      <main>
        {/* <!-- service details area start --> */}
            <section>
                <div className="service-details-area pt-120 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 order-1 order-xl-0">
                                <WidgetService servicelist={servicelist} countStart={1} countEnd={10}/>
                            </div>
                            <div className="col-xl-8 order-0 order-xl-1">
                                <div className="service-details-main ml-40 pb-20">
                                    <h3 className="service-details-title mb-20 wow fadeInUp" data-wow-delay="0.1s">Overview</h3>
                                    {
                                        service.video &&
                                        <div className="service-details-img mb-30 wow fadeInUp" data-wow-delay="0.3s">
                                            <iframe  src={service.video} title="YouTube video player" ></iframe>
                                        </div>
                                    }
                                    {
                                    service.content && 
                                    <div dangerouslySetInnerHTML={{ __html: service.content }} ></div>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          {/* <!-- service details area end --> */}
      </main>
      <FooterOne/>
    </React.Fragment>
  )
}
let getService = async () => {
  const servicearr = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/servicelist`);
  return servicearr.json();
}
export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const {slug} = context.query
  const service = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getservice?slug=${slug}`);
  const singleService = await service.json();
  return {
    props: {
      service: await singleService,
      allservices: await getService()
    }, // will be passed to the page component as props
  }
}
export default Slug