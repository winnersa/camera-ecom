import ProductOne from './product-1'
import SectionTitleCenter from '../section-title/section-title-center'

const ProductSection = ({productData}) => {

  return (
    <>
        {/* <!-- shop area start --> */}
        <section>
            <div className="shop-area pt-115 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SectionTitleCenter subtitle="Camera" title='Security Cameras'/>
                        </div>
                    </div>
                    <ProductOne productData={productData} count={3}/>
                </div>
            </div>
        </section>
        {/* <!-- shop area end --> */}
    </>
  )
}

export default ProductSection