import Link from 'next/link';
import {ToastContainer} from 'react-toastify';
import {Message_data} from '../../context/context';
import React, {useContext} from 'react';
import Image from 'next/image';
import {prependBaseUrl} from "../../data/constants";

const ProductOne = ({productData, count}) => {
    const {addToCart} = useContext(Message_data);

    const loaderProp = ({src}) => {
        return src
    }
    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="row">
                {
                    productData && productData.filter(item => item.id).sort((a, b) => a.id - b.id).map((item, id) => (
                        <div key={id} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="shop-item mb-40 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="shop-img w_img">
                                    <Link href={`/product/${item.id && item.id}`}>
                                        <Image
                                            width={410}
                                            height={425}
                                            src={item.attributes.image && item.attributes.image.data[0] && item.attributes.image.data[0].attributes.url ? prependBaseUrl(item.attributes.image.data[0].attributes.url) : '/default-image-path.jpg'}
                                            alt={item.attributes.image && item.attributes.image.data[0] && item.attributes.image.data[0].attributes.alternativeText ? item.attributes.image.data[0].attributes.alternativeText : 'Product Image'}
                                            loader={loaderProp}
                                        />

                                    </Link>
                                    <div className="shop-cart-action">
                                        <div className="shop-cart-icon">
                                            <Link href="#0" onClick={() => {
                                                addToCart(item.id && item.id,
                                                    1, item.attributes.price && item.attributes.price,
                                                    item.attributes.title && item.attributes.title,
                                                    item.attributes.image && item.attributes.image.data && item.attributes.image.data[0].id
                                                        ? item.attributes.image.data[0].id
                                                        : null)
                                            }}>
                                                <i className="fal fa-shopping-cart"></i> Add To Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="shop-content">
                                        {[...Array(5)].map((_, index) => {
                                            if (index < item.attributes.averageRating) {
                                                return <i key={index} className="fas fa-star"></i>
                                            } else {
                                                return <i key={index} className="fal fa-star"></i>
                                            }
                                        })}

                                    <h3 className="shop-content-title">
                                        <Link
                                            href={`/product/${item.id && item.id}`}>{item.attributes.title && item.attributes.title}</Link>
                                    </h3>
                                    <div className="shop-content-price">
                                        <h5 className="price">${item.attributes.price && item.attributes.price}</h5>
                                    </div>
                                </div>


                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default ProductOne;
