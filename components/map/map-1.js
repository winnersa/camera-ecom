import React from 'react'
import SectionTitleCenter from '../section-title/section-title-center'
import locationOne from '../../data/location/location'
import {useEffect} from 'react'
import Link from 'next/link'

const MapOne = () => {
    useEffect(() => {
        let myTarget = document.querySelectorAll('.location-common');
        myTarget.forEach((item)=> {
            item.addEventListener('mouseover', (e) => {
                e.target.classList.add('active');
            });
            item.addEventListener('mouseleave', (e) => {
                e.target.classList.remove('active');
            });
        })
    }, []);
  return (
    <React.Fragment>
        {/* <!-- map area start --> */}
            <div className="map-area pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SectionTitleCenter title={"We Work Around the World"} subtitle={"Work Area"} />
                        </div>
                    </div>
                    <div className="map-wrap w_img p-relative wow fadeInUp" data-wow-delay="0.5s">
                        <img src="/assets/img/bg/map.png" alt="Image Not Found" />
                        <div className="work-location">
                            {
                                locationOne && locationOne.filter(function(item){
                                    return item.id < 6
                                }).sort((a, b) => a.id - b.id).map((item, id) => {
                                    let activeClass = id == 0 ? 'active': '';
                                    return(
                                        <div className="location-main-item" key={id}>
                                            <div className={`location-common location-${item.id} ${activeClass}`}>
                                                <div className="location-content p-relative">
                                                    <div className="location-inner">
                                                        <img src={`/assets/img/bg/${item.img}`} alt="Image Not Found" />
                                                        <ul className="location-contact">
                                                            {item.number && 
                                                                <li>
                                                                    <i className="fal fa-phone"></i>
                                                                    <span><Link href={`tel:${item.numberLink && item.numberLink}`}>{item.number}</Link></span>
                                                                </li>
                                                            }
                                                            {
                                                                item.email &&
                                                                <li>
                                                                    <i className="fal fa-envelope"></i>
                                                                    <span><Link href={`mailto:${item.emailLink}`}>{item.email}</Link></span>
                                                                </li>
                                                            }
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- map area end --> */}
    </React.Fragment>
  )
}

export default MapOne