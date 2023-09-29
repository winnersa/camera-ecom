import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1';
import Seo from './seo/seo';
import HeaderOne from '../components/header/header-1';
import Link from 'next/link';
import {toast, ToastContainer} from 'react-toastify';
import {Message_data} from '../context/context';
import {useContext, useState} from 'react';
import Image from 'next/image';
import FooterOne from '../components/footer/footer-1';
import {prependBaseUrl} from "../data/constants";

const Cart = () => {
    const {clearCart, removeCart, minusCart, cart, subtotal, updateCart} = useContext(Message_data);
    let cartList = [];
    Object.keys(cart).forEach(function (key, index) {
        cartList[key] = cart[key];
    });

    const [quantityValues, setQuantityValues] = useState({});

    const handleQuantityChange = (quantity, e) => {
        const updatedValues = {...quantityValues, [quantity]: e.target.value};
        setQuantityValues(updatedValues);
    };

    const loaderProp = ({src}) => {
        return src
    }

    return (
        <>
            <HeaderOne/>
            <Seo title={"Cart"}/>
            <BreadCrumbOne title={"Cart"}/>
            <main>
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
                {/* <!-- cart area start --> */}
                <div className="cart-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-8 mb-30 mb-lg-0">
                                <div className="shopping-cart-table mb-20 wow fadeInUp" data-wow-delay="0.3s">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        {
                                            Object.keys(cart).length == 0 && (
                                                <tbody>
                                                <tr>
                                                    <td colSpan={5}>
                                                        <div
                                                            className='onsafe-cart-not-found mr-5 text-black text-bg-dark '>Please
                                                            sign in first. !
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            )
                                        }
                                        {
                                            cartList &&
                                            <tbody>
                                            {
                                                Object.keys(cartList).map((item, id) => {
                                                    let singleSubtotal = cart[item].attributes.product.data.attributes.price * cart[item].attributes.quantity;
                                                    return (
                                                        <tr key={id}>
                                                            <td>
                                                                <div className="shopping-cart-product-box">
                                                                    {cart[item].attributes.image &&
                                                                        <div className="image">
                                                                            <Image width={64} height={66.33}
                                                                                   src={cart[item].attributes.image.data.attributes.url && prependBaseUrl(cart[item].attributes.image.data.attributes.url)}
                                                                                   alt={cart[item].attributes.image.data.attributes.alternativeText ? cart[item].attributes.image.data.attributes.alternativeText : 'Product Image'}

                                                                                   loader={loaderProp}
                                                                            />
                                                                        </div>}
                                                                    {cart[item].attributes.product.data.attributes && <div className="title-wrap">
                                                                        <h4 className="title"><Link
                                                                            href={cart[item].attributes.product.data && `/product/${cart[item].attributes.product.data.id }`}>{cart[item].attributes.product.data.attributes.title }</Link>
                                                                        </h4>
                                                                    </div>}
                                                                </div>
                                                            </td>
                                                            {cart[item].attributes.product.data.attributes.price && <td>
                                                                <div className="product-cart-price">
                                                                    <span>${cart[item].attributes.product.data.attributes.price}</span>
                                                                </div>
                                                            </td>}
                                                            <td>
                                                                <div
                                                                    className="single-product-quantity-box cart-product-quantity">
                                                                    <form action="#">
                                                                        <button className="minus" onClick={(e) => {
                                                                            e.preventDefault();
                                                                            minusCart(id, 1)
                                                                        }}><i className="fal fa-minus"></i></button>
                                                                        <input
                                                                            type="text"
                                                                            name="quantity"
                                                                            value={quantityValues[cart[item].attributes.quantity] || cart[item].attributes.quantity}
                                                                            onChange={e => handleQuantityChange(cart[item].attributes.quantity, e)}
                                                                        />
                                                                        <button className="plus"><i
                                                                            className="fal fa-plus" onClick={(e) => {
                                                                            e.preventDefault();
                                                                            updateCart(id, 1)
                                                                        }}></i></button>
                                                                    </form>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-cart-price">
                                                                    {singleSubtotal && <span>${singleSubtotal}</span>}
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <button className="cart-trash-btn" onClick={(e) => {
                                                                    e.preventDefault();
                                                                    removeCart(cart[item].id)
                                                                }}><i className="fal fa-trash-alt"></i></button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        }

                                    </table>
                                </div>
                                <div className="cart-actions wow fadeInUp" data-wow-delay="0.5s">

                                    <button className="theme-btn" onClick={() => {
                                        clearCart()
                                    }} type="submit">Clear Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <div className="pl-40 cart-widget-left-space wow fadeInUp" data-wow-delay="0.7s">
                                    <div className="cart-total-box-2">
                                        <h4 className="title">Cart Totals</h4>
                                        <ul>
                                            <li><span className="label">Subtotal</span> <span
                                                className="price">${subtotal && subtotal}</span></li>
                                            <li>
                                                <span className="label">Shipping</span>
                                                <select className='shipping'>
                                                    <option>Free Shipping</option>
                                                    <option>Premium</option>
                                                </select>
                                            </li>
                                            <li><span className="label">Total</span> <span
                                                className="price total-price">${subtotal && subtotal}</span></li>
                                            <li className="has-cart-checkout-list-form-style">

                                                {
                                                    Object.keys(cart).length == 0 ? (
                                                        <Link href={'/signin'}
                                                              className="cart-checkout-form-btn theme-btn mt-40"
                                                              type="submit">Sign in</Link>
                                                    ) : (<Link href={'/checkout'}
                                                               className="cart-checkout-form-btn theme-btn mt-40"
                                                               type="submit">Checkout</Link>)
                                                }


                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- cart area end --> */}
            </main>
            <FooterOne/>
        </>
    )
}

export default Cart