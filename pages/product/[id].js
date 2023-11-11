import React, {useContext, useEffect, useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Link from 'next/link';
import {toast, ToastContainer} from 'react-toastify';
import {Message_data} from '../../context/context';
import Image from 'next/image';
import BreadCrumbOne from '../../components/breadcrumb/breadcrumb-1';
import Seo from '../seo/seo';
import HeaderOne from '../../components/header/header-1';
import FooterOne from '../../components/footer/footer-1';
import {BASE_URL, prependBaseUrl} from "../../data/constants";
import {FaStar} from 'react-icons/fa';


const Id = ({productId, product, reviews}) => {
    const {addToCart, cart, submitReview} = useContext(Message_data);
    const [quantityCount, setquantityCount] = useState(1);
    const [reviewsToShow, setReviewsToShow] = useState(3);
    const [isExpanded, setIsExpanded] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [hover, setHover] = useState(null);
    //
    // useEffect(() => {
    //     fetchReviews(productId);
    // }, []);
    //
    // const fetchReviews = async (productId) => {
    //     await fetch(`${BASE_URL}/api/reviews?populate=*&filters[product][id][$eq]=${productId}`);
    // }

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        submitReview(productId, rating, comment);
        // await fetchReviews(productId);
    };
    const handleToggleReviews = () => {
        if (isExpanded) {
            setReviewsToShow(3);
        } else {
            setReviewsToShow(reviews.length);
        }
        setIsExpanded(!isExpanded);
    };

    const incrementQty = () => {
        setquantityCount(quantityCount + 1);
        toast.success('Quantity Updated Successfully!');
    }
    const decrementQty = () => {
        if (quantityCount < 2) {
            setquantityCount(1);
            toast.warn("Please is too law!");
        } else {
            setquantityCount(quantityCount - 1);
            toast.success('Quantity Updated Successfully!');
        }
    }

    const loaderProp = ({src}) => {
        return src
    }

    return (
        <React.Fragment>
            <HeaderOne/>
            <Seo title={product.title && product.title}/>
            <BreadCrumbOne title={product.title && product.title}/>
            <main>
                {/* <!-- shop details start --> */}
                <section>
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
                    <div className="shop-details-area pt-120 pb-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="shop-details-img w_img mb-40 wow fadeInLeft" data-wow-delay="0.3s">

                                        <Image width={530} height={653.05}
                                               src={product.image && product.image.data[0] && product.image.data[0].attributes.url ? prependBaseUrl(product.image.data[0].attributes.url) : '/default-image-path.jpg'}
                                               alt={product.image && product.image.data[0] && product.image.data[0].attributes.alternativeText ? product.image.data[0].attributes.alternativeText : 'Product Image'}
                                               loader={loaderProp}

                                        />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="shop-details-content ml-40 mb-40">
                                        {product.title && <h3 className="shop-details-content-title wow fadeInUp"
                                                              data-wow-delay="0.3s">{product.title}</h3>}
                                        <div className="shop-details-review wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="shop-details-rating">
                                                {[...Array(5)].map((_, index) => {
                                                    if (index < product.averageRating) {
                                                        return <i key={index} className="fas fa-star"></i>
                                                    } else {
                                                        return <i key={index} className="fal fa-star"></i>
                                                    }
                                                })}
                                            </div>
                                            <span className="shop-details-review-text">({reviews.length} Customer Reviews)</span>
                                        </div>
                                        <div className="shop-details-price wow fadeInUp" data-wow-delay="0.5s">
                                            <span>{`$${product.price && product.price}`} {product.oldprice &&
                                                <del>${product.oldprice}</del>}</span>
                                        </div>
                                        {product.description &&
                                            <p className="shop-details-text wow fadeInUp" data-wow-delay="0.6s">
                                                {product.description}
                                            </p>}
                                        <div className="shop-details-cart-action-wrap wow fadeInUp"
                                             data-wow-delay="0.7s">
                                            <div className="single-product-quantity-box">
                                                <form action="#">
                                                    <Link href="#0" className="minus" onClick={decrementQty}><i
                                                        className="fal fa-minus"></i></Link>
                                                    <input type="text" readOnly name="quantity"
                                                           value={quantityCount && quantityCount}/>
                                                    <Link href="#0" className="plus" onClick={incrementQty}><i
                                                        className="fal fa-plus"></i></Link>
                                                </form>
                                            </div>
                                            <Link href="#0" onClick={() => {
                                                addToCart(productId && productId,
                                                    quantityCount, product.price && product.price,
                                                    product.title && product.title,
                                                    product.image && product.image.data && product.image.data[0].id
                                                        ? product.image.data[0].id
                                                        : null)
                                            }} className="shop-details-addcart">
                                                <span className="addcart-btn theme-btn"><i
                                                    className="fal fa-shopping-cart"></i> Add to Cart</span>
                                            </Link>
                                        </div>
                                        <div className="shop-product-meta">
                                        <span className="shop-product-meta-sku shop-meta-item">
                                            Brand:
                                            <span className="shop-meta-info">
                                                <Link href="#">{product.brand && product.brand}</Link>
                                            </span>
                                        </span>
                                            <span className="shop-product-meta-cat shop-meta-item">
                                            Model:
                                            <span className="shop-meta-info">
                                                <Link href="#">{product.model && product.model}</Link>
                                            </span>
                                        </span>
                                            <span className="shop-product-meta-cat shop-meta-item">
                                            Model:
                                            <span className="shop-meta-info">
                                                <Link href="#">{product.line && product.line}</Link>
                                            </span>
                                        </span>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Tab.Container id="onsafe-product-details-tab" defaultActiveKey="features">
                                        <div className="shop-details-info-tabs">
                                            <div className="shop-details-info-tab-controls mb-30">
                                                <Nav variant="pills">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="features">Feature</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="review">Reviews
                                                            ({reviews.length})</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div className="shop-details-info-tab-content">
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="features">
                                                        <div className="row">
                                                            <div className="col-xl-10">
                                                                {product?.features ? (
                                                                    <table
                                                                        className="table  table-bordered table-striped  table-responsive">
                                                                        <thead className="table-dark">
                                                                        <tr>
                                                                            <th>Feature</th>
                                                                            <th>Desc</th>
                                                                            {/*<th>Value</th>*/}
                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        {Object.keys(product.features).map((key, index) => (
                                                                            <tr key={index}>
                                                                                <td className="text-capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</td>
                                                                                <td>{product.features[key].toString()}</td>
                                                                            </tr>
                                                                        ))}
                                                                        </tbody>
                                                                    </table>
                                                                ) : (
                                                                    <p className="text-muted">No features available for
                                                                        this product.</p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>


                                                    <Tab.Pane eventKey="review">
                                                        <div className="shop-details-review-box">
                                                            <div className="shop-details-review-box-wrap">
                                                                {reviews.slice(0, reviewsToShow).map(review => (
                                                                    <div key={review.id}
                                                                         className="shop-details-review-box-single">
                                                                        <div className="shop-review-thumb">
                                                                            <img src="/assets/img/shop/author.jpg"
                                                                                 alt="Image Not Found"/>
                                                                        </div>
                                                                        <div className="shop-review-content">
                                                                            <div className="reviewer-info">
                                                                                <div className="shop-rating">
                                                                                    {[...Array(5)].map((_, index) => {
                                                                                        if (index < review.attributes.rating) {
                                                                                            return <i key={index}
                                                                                                      className="fas fa-star"></i>
                                                                                        } else {
                                                                                            return <i key={index}
                                                                                                      className="fal fa-star"></i>
                                                                                        }
                                                                                    })}
                                                                                </div>
                                                                                <h4 className="title">{review.attributes.user.data.attributes.username}</h4>
                                                                            </div>
                                                                            <div className="review-date">
                                                                                <span>{new Date(review.attributes.createdAt).toLocaleDateString()}</span>
                                                                            </div>
                                                                            <p className="review-text">{review.attributes.comment}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}

                                                                {reviewsToShow < reviews.length || isExpanded ? (
                                                                    <button
                                                                        className="btn btn-link mt-10"
                                                                        onClick={handleToggleReviews}
                                                                        style={{
                                                                            textDecoration: 'underline',
                                                                            border: 'none',
                                                                            backgroundColor: 'transparent',
                                                                            padding: 0
                                                                        }}>
                                                                        {isExpanded ? "Show Less Reviews" : "Show More Reviews"}
                                                                    </button>
                                                                ) : null}
                                                            </div>
                                                            <div>
                                                                <form onSubmit={handleReviewSubmit}>
                                                                    <div className="required-field">
                                                                        <h4 className="shop-details-review-title mb-10">
                                                                            Review</h4>
                                                                    </div>
                                                                    <div className="shop-review">
                                                                        <span>Your Rating</span>
                                                                        <div className="shop-review-rating">
                                                                            {[...Array(5)].map((_, index) => {
                                                                                const ratingValue = index + 1;
                                                                                return (
                                                                                    <label key={ratingValue}>
                                                                                        <input
                                                                                            type="radio"
                                                                                            name="rating"
                                                                                            value={ratingValue}
                                                                                            onClick={() => setRating(ratingValue)}
                                                                                            style={{display: 'none'}}
                                                                                        />
                                                                                        <FaStar
                                                                                            className="star"
                                                                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                                                            onMouseEnter={() => setHover(ratingValue)}
                                                                                            onMouseLeave={() => setHover(null)}
                                                                                            size={24}
                                                                                        />
                                                                                    </label>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                    <div className="submit-form-default">
                                                                        <div className="row">
                                                                            <div className="col-xl-12 col-lg-12">
                                                                                <div
                                                                                    className="shop-submit-form-default-single">
                                                                            <textarea
                                                                                name="review"
                                                                                id="review"
                                                                                className="review"
                                                                                placeholder="Your review"
                                                                                value={comment}
                                                                                onChange={(e) => setComment(e.target.value)}
                                                                            ></textarea>
                                                                                </div>
                                                                            </div>

                                                                            <div className="col-xl-12 col-lg-12">
                                                                                <div
                                                                                    className="shop-submit-form-default-single">
                                                                                    <button type="submit"
                                                                                            className="shop-submit-form-default-single-btn theme-btn"
                                                                                    >Submit
                                                                                        Review
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>

                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </div>
                                        </div>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- shop details end --> */}
            </main>
            <FooterOne/>
        </React.Fragment>
    )
}
export const getServerSideProps = async (context) => {
    const {id} = context.params;
    const product = await getProductById(id);
    const reviewRes = await fetch(`${BASE_URL}/api/reviews?populate=*&filters[product][id][$eq]=${id}`);
    const reviewData = await reviewRes.json();

    return {
        props: {
            productId: id,
            product: product.attributes,
            reviews: reviewData.data
        }
    }
}

const getProductById = async (id) => {
    const response = await fetch(`${BASE_URL}/api/products/${id}?populate=*`);
    return await response.json().then(response => {
        return response.data
    });
}

export default Id