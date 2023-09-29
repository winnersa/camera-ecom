import React from 'react'

const SectionTitleLeft = ({title, subtitle, excerpt}) => {
    function titleSetHTML({title}) {
        return { __html: title };
    }
    function excerptSetHTML({excerpt}) {
        return { __html: excerpt };
    }
  return (
    <React.Fragment>
        <div className="section-area mb-45">
            { subtitle && <span className="section-subtitle mb-2 wow fadeInUp" data-wow-delay="0.1s">{subtitle}</span> }
            { title && <h2 className="section-title mb-15 wow fadeInUp" data-wow-delay="0.3s" dangerouslySetInnerHTML={titleSetHTML({title})}></h2>}
            {excerpt && <p className="section-text wow fadeInUp" data-wow-delay="0.5s" dangerouslySetInnerHTML={excerptSetHTML({excerpt})}></p>}
        </div>
    </React.Fragment>
  )
}

export default SectionTitleLeft