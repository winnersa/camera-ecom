import React, {useContext} from 'react'
import BreadCrumbOne from '../components/breadcrumb/breadcrumb-1'
import Seo from './seo/seo'
import HeaderOne from '../components/header/header-1'
import FooterOne from '../components/footer/footer-1';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {toast, ToastContainer} from 'react-toastify';
import {Message_data} from "../context/context";


const Checkout = () => {

    const {cart, subtotal} = useContext(Message_data);
    let cartList = [];
    Object.keys(cart).forEach(function (key, index) {
        cartList[key] = cart[key];
    });

    const CheckoutSchema = Yup.object().shape({
        firstname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!'),
        lastname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!'),
        country: Yup.string().required('Required'),
        city: Yup.string().required('Required'),
        zipcode: Yup.number().required('Required'),
        phone: Yup.number().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    return (
        <React.Fragment>
            <HeaderOne/>
            <Seo title={"Checkout"}/>
            <BreadCrumbOne title={"Checkout"}/>
            <main>
                {/* <!-- checkout area start --> */}
                <div className="checkout-area pt-120 pb-80">
                    <div className="container">
                        <Formik
                            initialValues={{
                                firstname: '',
                                lastname: '',
                                country: '',
                                city: '',
                                zipcode: '',
                                phone: '',
                                companyname: '',
                                address: '',
                                email: '',
                                message: '',
                            }}
                            validationSchema={CheckoutSchema}
                            onSubmit={values => {
                                // same shape as initial values
                                const {
                                    firstname,
                                    lastname,
                                    country,
                                    city,
                                    zipcode,
                                    address,
                                    companyname,
                                    email,
                                    message,
                                    phone
                                } = values;
                                toast.success("Form Submitted Successfully!");
                            }}
                        >
                            {
                                ({errors, touched}) => {
                                    return (
                                        <React.Fragment>
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
                                            <Form>
                                                <div className="row">
                                                    <div className="col-xxl-7 col-xl-7 col-lg-7 mb-40 wow fadeInLeft">
                                                        <div className="billing-details-space-right pb-10">
                                                            <h4 className="billing-details-title mb-25">Billing
                                                                details</h4>
                                                            <div className="submit-form-default">
                                                                <div className="row">
                                                                    <div
                                                                        className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                                        <div
                                                                            className="submit-form-default-single mb-15">
                                                                            <Field type="text" id="firstname"
                                                                                   name='firstname'
                                                                                   placeholder="First name"
                                                                                   className="firstname"/>
                                                                            {errors.firstname && <span
                                                                                className='onsafe-alert-danger'>{errors.firstname}</span>}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                                        <div
                                                                            className="submit-form-default-single mb-15">
                                                                            <Field type="text" name='lastname'
                                                                                   id="lastname" className="lastname"
                                                                                   placeholder="Last name"/>
                                                                            {errors.lastname && <span
                                                                                className='onsafe-alert-danger'>{errors.lastname}</span>}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-12">
                                                                        <div
                                                                            className="submit-form-default-single mb-15">
                                                                            <Field type="text" name='companyname'
                                                                                   id="companyname"
                                                                                   className="companyname"
                                                                                   placeholder="Company name"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-12">
                                                                        <div className="submit-form-default-single">
                                                                            <Field
                                                                                component="select"
                                                                                id="country"
                                                                                name="country"
                                                                                className={`select-country ${errors.country && `mb-0`} has-nice-select-2`}
                                                                                multiple={false}
                                                                            >
                                                                                <option value="">Select Country</option>
                                                                                <option value="USA">United States
                                                                                </option>
                                                                                <option value="BD">Bangladesh</option>
                                                                                <option value="IN">India</option>
                                                                            </Field>
                                                                            {errors.country && <span
                                                                                className='onsafe-alert-danger mb-15'>{errors.country}</span>}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-12">
                                                                        <div
                                                                            className="submit-form-default-single mb-15">
                                                                            <Field type="text" name='address'
                                                                                   placeholder="Address"
                                                                                   className="address"/>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                                        <div
                                                                            className="submit-form-default-single mb-15">
                                                                            <Field type="text" name='city'
                                                                                   placeholder="City" className="city"/>
                                                                            {errors.city && <span
                                                                                className='onsafe-alert-danger'>{errors.city}</span>}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                                        <div
                                                                            className="submit-form-default-single mb-15">
                                                                            <Field type="text" name='zipcode'
                                                                                   placeholder="Zip Code"
                                                                                   className="zip"/>
                                                                            {errors.zipcode && <span
                                                                                className='onsafe-alert-danger'>{errors.zipcode}</span>}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                                        <div
                                                                            className="submit-form-default-single mb-35">
                                                                            <Field type="number" name='phone'
                                                                                   placeholder="Phone"
                                                                                   className="phone"/>
                                                                            {errors.phone && <span
                                                                                className='onsafe-alert-danger'>{errors.phone}</span>}
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                                        <div
                                                                            className="submit-form-default-single mb-35">
                                                                            <Field type="email" name='email'
                                                                                   placeholder="Email Address"
                                                                                   className="checkout-email"/>
                                                                            {errors.email && <span
                                                                                className='onsafe-alert-danger'>{errors.email}</span>}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="billing-details-space-right">
                                                            <div className="row">
                                                                <div className="col-xxl-12">
                                                                    <h4 className="billing-details-title mb-25">Additional
                                                                        information</h4>
                                                                    <div className="submit-form-default-single">
                                                                        <Field as="textarea" name="message" cols="30"
                                                                               rows="10"
                                                                               placeholder="Order notes (optional)"></Field>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-5 col-xl-5 col-lg-5 wow fadeInRight">
                                                        <div className="pl-40 checkout-widget-left-space">
                                                            <div className="checkout-wrap">
                                                                <div className="checkout-total-box-2">
                                                                    <h4 className="title">checkout Totals</h4>
                                                                    <ul>
                                                                        <li><span
                                                                            className="product-name">Product</span>
                                                                            <span
                                                                                className="product-total">Subtotal</span>
                                                                        </li>

                                                                        {
                                                                            Object.keys(cartList).map((item, id) => {
                                                                                return (
                                                                                    <>
                                                                                        <li><span className="label">{cart[item].attributes.product.data.attributes.title}</span>
                                                                                            <span
                                                                                                className="price">${cart[item].attributes.product.data.attributes.price}</span>
                                                                                        </li>
                                                                                    </>
                                                                                )
                                                                            })
                                                                        }

                                                                        <li><span
                                                                            className="label">Subtotal</span>
                                                                            <span
                                                                                className="price">${subtotal}</span>
                                                                        </li>
                                                                        <li><span
                                                                            className="label">Total</span>
                                                                            <span
                                                                                className="price total-price">${subtotal}</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="checkout-bottom">

                                                                    <button
                                                                        className="checkout-checkout-form-btn theme-btn"
                                                                        type="submit">Checkout
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        </React.Fragment>
                                    )
                                }
                            }
                        </Formik>
                    </div>
                </div>
                {/* <!-- checkout area end --> */}
            </main>
            <FooterOne/>
        </React.Fragment>
    )
}

export default Checkout