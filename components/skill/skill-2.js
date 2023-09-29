import React from 'react'
import { countOne } from '../../data/count/count-1';
import skillData from '../../data/skill/skill-1';
import { ProgressBar } from 'react-bootstrap';
const SkillTwo = () => {
  return (
    <React.Fragment>
        {/* <!-- choose area start --> */}
            <div className="choose-area pt-110 pb-80 ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-area section-white text-center mb-35">
                                <span className="section-subtitle mb-2 wow fadeInUp text-white" data-wow-delay="0.1s">We are best</span>
                                <h2 className="section-title mb-15 wow fadeInUp" data-wow-delay="0.3s">Why choose us?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="choose-progress pr-20 pb-40">
                                <p>Manufacture industry became a key sector of production and labour in North American and European countries during the Industrial Revolution, upsetting previous mercantile and feudal economies.</p>
                                <div className="progress-wrap pr-20 mb-30 mb-lg-0">
                                    {
                                        skillData && skillData.filter(function(item){
                                            return item.id < 4
                                        }).sort((a, b) => a.id - b.id).map((item) => {
                                            return(
                                                <div key={item.id} className="single-progress-bar">
                                                    {item.label && 
                                                    <div className="progress-label">
                                                        <span className="label-text">{item.label}</span>
                                                    </div>
                                                    }
                                                    {item.value && <ProgressBar now={item.value} /> }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="choose-counter pl-20 pb-40">
                            {
                                countOne && countOne.filter(function(e){
                                    return e.id >= 4 && e.id <= 7
                                }).sort((a, b) => a.id - b.id).map((item, id) => {
                                    let classname;
                                    if(id == 0) {
                                        classname="choose-counter-item pb-40 pt-35 pt-sm-0";
                                    } else if(id == 1) {
                                        classname="choose-counter-item pb-40 pt-35 pt-sm-0";
                                    } else if(id == 2) {
                                        classname="choose-counter-item pb-40 pb-sm-0 pt-35";
                                    } else if(id == 3) {
                                        classname="choose-counter-item pb-40 pb-sm-0 pt-35";
                                    }
                                    return(
                                        <div key={id} className={classname && classname}>
                                            { item.icon && <div className="item-icon">
                                                <i className={`${item.icon}`}></i>
                                            </div> }
                                            <div className="item-content">
                                                {item.number && <h3 className="content-title"><span className="odometer choose_count">{item.number}</span></h3> }
                                                { item.label && <span className="content-subtitle">{item.label}</span>}
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
        {/* <!-- choose area end --> */}
    </React.Fragment>
  )
}

export default SkillTwo