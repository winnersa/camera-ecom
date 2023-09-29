import Link from 'next/link'

const BreadCrumbOne = ({title}) => {
  return (
    <>
        {/* <!-- breadcrumb area start --> */}
        <section className="bn-slider breadcrumb-height bn-breadcrumb align-items-center d-flex" style={{ backgroundImage: `url("/assets/img/bg/bg-1.jpg")` }} >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bn-breadcrumb-wrap text-center">
                            {title && <h2 className="bn-breadcrumb-title">{title}</h2>}
                            <div className="bn-breadcrumb-list">
                                <Link href="/">Home</Link>
                                {title && <span>{title}</span>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- breadcrumb area end --> */}
    </>
  )
}

export default BreadCrumbOne