import React from 'react'
import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1'
 import Seo from './seo/seo'
 import HeaderOne from '../components/header/header-1'
 import FooterOne from '../components/footer/footer-1'
 import ProductOne from '../components/product/product-1'
import { useQuery } from 'react-query';
import {PRODUCT_LIST} from "../data/constants";
import axios from "axios";

const ShopOne = (props) => {
   const { data } = useQuery({
      queryKey: ['product'],
      queryFn: getProducts,
      initialData: props.products,
    })


  return (
    <React.Fragment>
        <HeaderOne/>
        <Seo title={"Camera"} />
        <BreadCrumbOne title={"Camera"}/>
        <main>
        {/* shop area start */}
            <section>
                <div className="shop-area pt-120 pb-80">
                    <div className="container">
                        <div className="shop-sorting-wrapper mb-30">
                            <div className="row align-items-center">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 text-center text-md-start">
                                   <div className="product__result">
                                      <p><span>{data.length}</span> Items On List</p>
                                   </div>
                                </div>
                                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6">
                                   <div className="product__filter-wrapper d-flex align-items-center justify-content-center justify-content-md-end">
                                      <div className="product__filter-count d-flex align-items-center mb-15">
                                         <span>Sort By</span>
                                         <select>
                                            <option>Default Sorting</option>
                                            <option>Sort By Latest</option>
                                            <option>Sort By Popularity</option>
                                            <option>Sort By Price</option>
                                         </select>
                                      </div>
                                   </div>
                                </div>
                             </div>
                        </div>

                        <ProductOne productData={data} count={data.length}/>

                    </div>
                </div>
            </section>
            {/* shop area end  */}
        
        </main>
        <FooterOne/>
    </React.Fragment>
  )
}

const getProducts = async () => {
    const response = await axios.get(PRODUCT_LIST);
    const data = await response.data;
    return data.data.map(item => item);
}


export const getServerSideProps = async (context) => {
   return {
     props: {
       products: await getProducts()
     }
   }
 }

 


export default ShopOne