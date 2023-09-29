import React from 'react'
import { ServiceOneJSData } from '../../data/service-js-data/service-1'

const ServiceTwo = () => {
  return (
    <React.Fragment>
        <div className="product-wrapper-bg">
            <div className="product-wraps container">
                <div className="inner-wrap">
                    <div className="product-content has-spaces">
                        <div className="product-inner">
                            {
                                ServiceOneJSData && ServiceOneJSData.filter(item => item.id < 6).sort((a, b) => a.id - b.id).map((item, id) => (
                                    <div className="product-item wow fadeInUp" key={id}>
                                        <div className="product-icon">
                                            {item.icon && <i className={item.icon}></i> }
                                        </div>
                                        {
                                            item.excerpt &&
                                            <div className="product-info">
                                                <h4 dangerouslySetInnerHTML={{ __html: item.excerpt }} ></h4>
                                            </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ServiceTwo