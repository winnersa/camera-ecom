const SectionTitleCenter = ({title, subtitle}) => {
    function titleSetHTML({title}) {
        return { __html: title };
    }
  return (
    <>
        <div className="section-area text-center mb-45">
            { subtitle && <span className="section-subtitle mb-2">{subtitle}</span> }
            { title && <h2 className="section-title mb-15" dangerouslySetInnerHTML={titleSetHTML({title})}></h2>}
        </div>
    </>
  )
}

export default SectionTitleCenter