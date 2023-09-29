import { Nav } from 'react-bootstrap';
import { Tab } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import serviceJSDataTwo from '../../data/service-js-data/service-2';
import faqData from '../../data/faq/faq-1';
import SectionTitleCenter from '../section-title/section-title-center';
import Image from 'next/image';

const FeaturesOne = () => {
  return (
    <>
        {/* <!-- feature area start --> */}
        <section>
            <div className="feature-area pt-110 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SectionTitleCenter subtitle={"Our Features"} title={"What features do we provide?"} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Tab.Container defaultActiveKey={`tab${serviceJSDataTwo[0].slug}`}>
                            <div className="feature-wrap">
                                <div className="feature-flex">
                                    <div className="feature-tab mb-25 wow fadeInUp" data-wow-delay="0.5s">
                                        <Nav variant="pills" className="flex-column">
                                            {
                                                serviceJSDataTwo && serviceJSDataTwo.filter(function(item){
                                                    return item.id <= 7
                                                }).sort((a, b) => a.id - b.id).map((item, id) => {
                                                    return(
                                                        <Nav.Item key={id}>
                                                            {item.title && <Nav.Link eventKey={`tab${item.slug && item.slug}`}><i className={item.icon && item.icon}></i>{item.title}</Nav.Link> }
                                                        </Nav.Item>
                                                    )
                                                })
                                            }
                                        </Nav>
                                    </div>
                                    <Tab.Content className={"feature-content"}>
                                        {
                                            faqData && faqData.filter((item) => {
                                                return item.refServiceSlug && item.id;
                                            }).sort((a, b) => a.id - b.id).map((item) => {
                                                return(
                                                    <Tab.Pane key={item.id} eventKey={`tab${item.refServiceSlug}`}>
                                                        <div className="feature-item">
                                                            <div className="feature-item-wrap mb-10">
                                                                <div className="row">
                                                                    <div className="col-xl-6">
                                                                        <div className="feature-item-content mb-30">
                                                                            {item.title && <h4 className="feature-item-content-title">{item.title}</h4> }
                                                                            { item.content && <p className="feature-item-content-text">{item.content}</p> }
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-6">
                                                                        <div className="feature-item-img w_img mb-30">
                                                                            <Image src="/assets/img/feature/feature-1.jpg" alt="Image Not Found" width={425} height={270} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Accordion>
                                                                {
                                                                    item.faq && item.faq.map((item, id)=> {
                                                                        return(
                                                                            <Accordion.Item key={id} eventKey={id}>
                                                                                {item.question && <Accordion.Header>{item.question}</Accordion.Header> }
                                                                                    {item.answere && 
                                                                                    <Accordion.Body>
                                                                                        {item.answere}
                                                                                    </Accordion.Body>
                                                                                }
                                                                            </Accordion.Item>
                                                                        )
                                                                    })
                                                                }

                                                            </Accordion>
                                                        </div> 
                                                    </Tab.Pane>
                                                )
                                            })
                                        }
                                    </Tab.Content>
                                </div>
                            </div>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- feature area end --> */}
    </>
  )
}

export default FeaturesOne